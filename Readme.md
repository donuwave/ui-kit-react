ui-kit-react
=============

React UI kit library.

NPM
---
https://www.npmjs.com/package/@donu/ui-kit-react?activeTab=readme

How to create the library
-------------------------
1. Initialize the project:
   - `npm init`
   - `npm i -D typescript ts-loader webpack webpack-cli`
   - `npm i react react-dom`
2. Configure TypeScript:
   - Create `tsconfig.json` with `declaration: true` and `outDir: ./dist`.
3. Configure bundling:
   - Create `webpack.config.js` with `entry: ./src/index.ts` and `libraryTarget: 'umd'`.
4. Create public API:
   - Export components from `src/index.ts`.
5. Build:
   - `npx webpack`
6. Publish:
   - `npm publish --access public`
