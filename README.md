# Open xOps

Open xOps turns open ideas into practical tools that help people make better decisions and tackle everyday challenges.

The site is a static HTML/CSS/JS website (no build step, no frameworks) that lives at the root of this repository.

## Project Structure

```text
index.html
tools.html
learning.html
about.html
css/
  styles.css
js/
  main.js
assets/
  images/
  icons/
  logos/
```

## GitHub Pages Deployment

- **Approach:** Site files were moved from `/OpenxOpsApp` to the repository root so GitHub Pages can serve `index.html` directly, without any build/copy step.
- **Pages settings:** In the repo's **Settings → Pages**, set **Source** to "Deploy from a branch", **Branch** to `main`, and **Folder** to `/ (root)`.
- **Public URL:** https://renedeposada.github.io/openxops/

All internal links and asset references (`css/`, `js/`, `assets/`) are relative, so no path changes were needed beyond the file move.
