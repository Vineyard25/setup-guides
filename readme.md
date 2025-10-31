# 🪄 Vineyard25 Setup Checklist

This is a simple web app for viewing and completing **team setup guides** on Sunday mornings. Each guide is a Markdown file (like `tech.md`, `worship.md`, or `kids.md`) that lives in the `/guides` folder.

The app automatically lists available guides on the homepage and loads them dynamically — no rebuild needed.

Publically available at https://guides.vineyard25.org and hosted on **GitHub Pages**.

---

## ⚙️ Commands

### `npm run dev`

Runs the local dev server with live reload at [http://127.0.0.1:8080](http://127.0.0.1:8080).
Automatically regenerates `guides/index.json` from your Markdown files.

### `npm run build`

Builds the production version to `/dist`:

* Compiles TailwindCSS
* Converts inline JSX to JS
* Minifies HTML/CSS/JS
* Injects built assets

### `npm run make:guides-index`

Manually regenerates `guides/index.json` from `.md` files in `/guides` (excluding `template.md`).

### `npm run minify:images`

Optional: compresses image assets for faster load times.

---

## 🧱 File Structure

```
/guides
  ├─ tech.md
  ├─ worship.md
  ├─ kids.md
  ├─ template.md
  └─ index.json  ← auto-generated
/scripts
  ├─ make-guides-index.mjs
  └─ minify-images.mjs
/src
  └─ input.css
index.html
```

---

## 📝 Writing Guides

Each guide uses Markdown with a small frontmatter block at the top.
See `guides/template.md` for a ready-made example.

Just duplicate it, rename, edit, and refresh — your new team will appear automatically.

---

## 🌐 Hosting

The app runs entirely client-side and can be hosted directly on **GitHub Pages**.
No backend or build pipeline required — just push updates to `main`.