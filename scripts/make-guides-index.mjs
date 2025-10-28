import { readdirSync, writeFileSync } from "fs";

const files = readdirSync("./guides")
  .filter(f => f.endsWith(".md") && f !== "template.md")
  .map(f => ({
    slug: f.replace(".md", ""),
    title: f.replace(".md", "").charAt(0).toUpperCase() + f.slice(1, -3),
  }));

writeFileSync("./guides/index.json", JSON.stringify(files, null, 2));
console.log("✅ guides/index.json generated.");
