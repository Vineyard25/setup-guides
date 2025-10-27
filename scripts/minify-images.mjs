import sharp from 'sharp';
import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import { globby } from 'globby';
import path from 'path';
import fs from 'fs/promises';

const files = await globby([
  'assets/**/*.png',
  'assets/**/*.jpg',
  'assets/**/*.jpeg',
]);

if (files.length === 0) {
  console.log('No PNG or JPG files found in assets');
  process.exit(0);
}

// 1️⃣ Resize down to max 1000px width
for (const file of files) {
  const output = file; // overwrite in place
  try {
    const image = sharp(file);
    const metadata = await image.metadata();
    if (metadata.width > 1000) {
      await image.resize({ width: 1000 }).toFile(`${output}.tmp`);
      await fs.rename(`${output}.tmp`, output);
      console.log(`Resized → ${path.basename(file)} (${metadata.width}px → 1000px)`);
    }
  } catch (err) {
    console.warn(`⚠️ Skipped ${file}: ${err.message}`);
  }
}

// 2️⃣ Minify (lossless / visually lossless)
await imagemin(files, {
  destination: 'assets',
  plugins: [
    imageminPngquant({
      quality: [0.6, 0.8],
    }),
    imageminMozjpeg({
      quality: 75,
      progressive: true,
    }),
  ],
});

console.log(`✅ Resized + minified ${files.length} image${files.length > 1 ? 's' : ''}`);
