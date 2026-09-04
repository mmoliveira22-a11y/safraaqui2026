// Fast lint tier. Everything here runs without type information, which is
// what keeps it quick enough for a pre-commit hook. The rules that need the
// type checker live in eslint.typed.config.mjs and run on their own script.
//
// This project (safraaqui2026): Vite + React 19 + TypeScript, source at
// repo root (no src/ directory), alias "@/*" points to the root, no
// dedicated data-access module, no logger adapter. import-x/no-restricted-
// paths and quality/no-direct-data-access were REMOVED accordingly.
import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

import quality from "./eslint-rules/index.cjs";

export default defineConfig([
  {
    languageOptions: {
      parserOptions: { tsconfigRootDir: import.meta.dirname },
      // Browser + Node runtime declared explicitly. This project is a Vite
      // SPA; the small scripts at the root (test.js, test-backend.js) also
      // run under Node.
      globals: {
        console: "readonly",
        process: "readonly",
        fetch: "readonly",
        URL: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
      },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.strict,

  // Framework presets. Left commented — this project uses React 19 with the
  // new JSX runtime; if react-hooks lint becomes needed, install
  // eslint-plugin-react-hooks and enable it here.
  //   reactHooks.configs.flat.recommended,

  {
    // Sources live at repo root, not under src/.
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
    plugins: { quality },
    rules: {
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-var": "error",
      "prefer-const": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // Size and complexity budgets are "warn" on purpose. Numbers are a
      // conversation starter, not a gate. Promote to "error" when the
      // per-rule count reaches zero.
      complexity: ["warn", 12],
      "max-depth": ["warn", 4],
      "max-statements": ["warn", 20],
      "max-params": ["warn", 4],
      "max-lines-per-function": [
        "warn",
        { max: 150, skipBlankLines: true, skipComments: true },
      ],
      "max-nested-callbacks": ["warn", 3],
      "quality/max-lines": ["error", { max: 350 }],
      "quality/no-direct-console": [
        "error",
        { logger: "the project logging helper" },
      ],
      // quality/no-direct-data-access intentionally OMITTED: this project
      // has no dedicated data-access module. Add it back the moment a
      // db/supabase/prisma client is introduced.
    },
  },
  {
    // Same file budget for test files, at "warn". Placed AFTER the "error"
    // block on purpose — flat config applies the later matching block last.
    files: [
      "**/*.test.{ts,tsx,js,jsx}",
      "**/{__tests__,__mocks__,fixtures,mocks}/**/*.{ts,tsx,js,jsx}",
    ],
    plugins: { quality },
    rules: {
      "quality/max-lines": ["warn", { includeTests: true, max: 350 }],
    },
  },
  {
    files: ["**/*.test.{ts,tsx,js,jsx}"],
    rules: {
      // These three fire on describe/it nesting and long arrange sections
      // without pointing at real problems.
      "max-statements": "off",
      "max-lines-per-function": "off",
      "max-nested-callbacks": "off",
    },
  },
  {
    // The two ad-hoc backend scripts at the root: CommonJS Node tooling,
    // not production code. Declare CommonJS + Node globals so require/
    // __dirname stop triggering no-undef, and switch off the console gate.
    files: ["test.js", "test-backend.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        Buffer: "readonly",
        process: "readonly",
      },
    },
    rules: {
      "quality/no-direct-console": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    files: ["eslint-rules/**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { module: "readonly", require: "readonly" },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  globalIgnores([
    "node_modules/**",
    "dist/**",
    "build/**",
    "coverage/**",
    "**/*.tsbuildinfo",
    "package-lock.json",
    // Vendored / non-source artifacts committed to this repo.
    "safraaqui (1).zip",
    "*.html",
  ]),
]);
