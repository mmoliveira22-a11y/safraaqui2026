// Type-aware lint tier. Runs on its own script (`lint:types`) — kept OUT
// of the fast tier because projectService builds a full TS program.
//
// Source lives at repo root, not under src/.
import defaultConfig from "./eslint.config.mjs";

export default [
  ...defaultConfig,
  {
    files: ["**/*.{ts,tsx}"],
    ignores: ["eslint-rules/**", "node_modules/**", "dist/**"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // All rules start at "warn". Promote per rule once count reaches zero.
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-misused-promises": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/only-throw-error": "warn",
      "@typescript-eslint/return-await": ["warn", "in-try-catch"],
      "@typescript-eslint/await-thenable": "warn",
      "@typescript-eslint/unbound-method": "warn",
      "@typescript-eslint/restrict-template-expressions": "warn",
      "@typescript-eslint/restrict-plus-operands": "warn",
      "@typescript-eslint/require-await": "warn",
    },
  },
];
