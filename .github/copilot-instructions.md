# Copilot instructions

## Repository structure

This repository is a collection of independent Zero to Mastery course exercises, not a single application or npm workspace. Each top-level lesson directory is self-contained:

- Most lessons are standalone JavaScript examples intended for a browser console or a matching `index.html`.
- Browser exercises use classic `<script>` tags and share state through the page's global scope.
- `Background_Generator` is the only npm-managed project. Its authored entry point is `script.js`; Browserify packages that file and Lodash into the checked-in `bundle.js`, which `index.html` loads.
- `Basics/HTML_and_CSS/index.html` deliberately loads `../JavaScript/script.js`, so changes in one `Basics` subdirectory can affect the sibling exercise.

Do not introduce root-level application assumptions, cross-lesson imports, or a shared build system unless the task explicitly asks for them.

## Commands

Run npm commands from `Background_Generator`, not the repository root:

```powershell
cd Background_Generator
npm install
npm run build
```

`npm run build` runs `browserify script.js -o bundle.js`. Rebuild and commit `bundle.js` whenever `Background_Generator/script.js` or its bundled dependencies change.

There are no configured test, single-test, lint, or start commands. The `npm start` command shown in `Background_Generator/READme.md` is not defined in `package.json`.

## Code conventions

- Preserve the teaching level of the lesson being edited. Earlier exercises intentionally use `var`, function expressions, prompts, and direct DOM APIs; advanced lessons demonstrate `const`/`let`, arrow functions, classes, array methods, and other newer concepts. Do not modernize unrelated examples for consistency.
- Keep lesson examples local and focused on the concept named by their directory. Similar-looking arrays, objects, and helper functions across lessons are independent demonstrations rather than shared production code.
- For HTML-backed exercises, keep DOM selectors, element IDs, and relative `<script>` paths synchronized with the matching HTML file. Scripts generally assume the DOM elements already exist because script tags are placed at the end of `<body>`.
- Use CommonJS `require(...)` only in `Background_Generator/script.js`, where Browserify resolves browser dependencies. Other lessons run directly as classic browser scripts.
- Treat `Background_Generator/bundle.js` as generated output: edit `script.js`, then regenerate the bundle instead of modifying bundled code by hand.
- Follow the existing local formatting: two-space indentation, semicolons, and single-quoted JavaScript strings. Retain explanatory comments when they are part of the lesson material.
