# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS personal portfolio website for Abedin Hyseni (Developer KS Portfolio), deployed to GitHub Pages at [developerks.website](https://www.developerks.website). No build system or package manager.

## Development

**Preview locally:**
```bash
# Simple HTTP server (Python)
python3 -m http.server 8080
# or
npx serve .
```

Then open `http://localhost:8080` in a browser. HTML files can also be opened directly from the filesystem.

**Deploy:** Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/static.yml`) which deploys the entire repo to GitHub Pages automatically.

## CSS Architecture

- [css/style.scss](css/style.scss) is the SCSS source for `index.html` styles. The compiled output [css/style.css](css/style.css) is committed and served directly — there is no automated SCSS build step, so compile manually with `sass css/style.scss css/style.css` if you have Sass installed, or edit `style.css` directly.
- [css/portfolio.css](css/portfolio.css) — styles for `portfolio.html` and `links.html`
- [css/social.css](css/social.css) — social icon button styles used on `index.html`

CSS custom properties (`--text-primary`, `--color-primary`, `--color-secondary`, etc.) drive the dark/light theme. The root element for theming is `#main-wrapper` on `index.html`.

## JavaScript

[js/index.js](js/index.js) handles two concerns on `index.html`:
1. **Dark/light mode toggle** — each `.bounce-animation` button click swaps `dark-mode`/`light-mode` classes on `#main-wrapper`.
2. **Dropdown menus** — each category button independently toggles its corresponding `<ul class="dropdown-menu">` between `inline-block` and `none`.

[js/fslightbox.js](js/fslightbox.js) is a vendored third-party library for the image lightbox on `index.html`.

## Page Structure

- **index.html** — landing/hero page with navigation toolbar, contact info, and portfolio image gallery (lightbox)
- **portfolio.html** — skills/work portfolio detail page
- **links.html** — curated developer resource links, organized by category with anchor IDs (e.g. `#chatgpt`, `#html`, `#mysql`) that the dropdown menus in `index.html` link to

## Asset Cache Busting

CSS and JS assets use query string versioning (e.g. `style.css?v=3`, `index.js?v=1`). Increment these version numbers when deploying changes to those files.

## Mobile vs Desktop Navigation

The toolbar in `index.html` has two navigation trees:
- **Desktop** (`.menu-desktop`): separate Frontend/Backend buttons
- **Mobile** (`.menu-mobile`): a single "WEBs" button with nested submenus

Visibility is controlled by CSS media queries at `max-width: 780px`.
