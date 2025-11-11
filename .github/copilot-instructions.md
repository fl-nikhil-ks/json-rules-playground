## Repo snapshot

- Framework: Create React App (CRA) — single-page React app scaffolded by `react-scripts`.
- Entry points: `src/index.js` (creates root), `src/App.js` (main UI component).
- Key scripts: `npm start` (dev server), `npm test` (CRA tests), `npm run build` (production bundle). See `package.json`.

## Big picture for an AI coding agent

- This is a small CRA playground. Focus on editing React components under `src/` and static assets in `public/`.
- No backend code or API integrations live in this repo; external integration points (if added) will likely be configuration files or new modules under `src/`.

## What to change and why

- UI changes: modify `src/App.js` / `src/*.css` for behavior or styles. Use functional components and default CRA patterns.
- Add components: put new components in `src/` alongside `App.js` and import them in `index.js` or `App.js`.

## Project-specific conventions and useful patterns

- File layout follows CRA defaults. Keep component files inside `src/`. Use `.css` files per component as seen with `App.css`.
- Tests: CRA testing setup is present (`setupTests.js`). Follow React Testing Library patterns (dependencies in `package.json`).
- Avoid ejecting — the repo uses `react-scripts` 5.0.1; only eject if explicitly requested by maintainers.

## Build, test, debug commands (explicit examples)

- Start dev server (live reload): `npm start` — opens at http://localhost:3000 by default.
- Run tests (watch mode): `npm test`.
- Create production bundle: `npm run build` (output -> `build/`).

## Examples to reference in edits

- To change the homepage text, edit `src/App.js` and the related styles in `src/App.css`.
- To mount a new top-level component, update `src/index.js` where `ReactDOM.createRoot` is called.

## Integration points & dependencies

- All dependencies are declared in `package.json`. Notable ones: `react`, `react-dom`, `react-scripts`, and React Testing Library packages.
- If adding runtime external services, add configuration to `.env` (CRA honors `.env` files) and do not commit secrets.

## Safety and constraints for AI edits

- Keep changes minimal and focused: for UI tweaks, modify only `src/` and `public/` files unless adding new build steps.
- Do not add or modify native build tooling (no new `webpack` or `babel` configs) unless maintainers request an eject.

## What to include in PRs touched by AI

- Brief description of the change, the files modified, and why. Show before/after screenshots for UI changes when helpful.
- Run `npm test` locally and confirm no new failing tests before creating PR.

---
If any section is unclear or you want more detail (examples of component structure, test patterns, or a suggested starter component + test), tell me which part to expand and I'll update this file.
