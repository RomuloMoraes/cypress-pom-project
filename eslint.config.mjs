import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],

    plugins: {
      js,
    },

    extends: ["js/recommended"],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,

        // Cypress
        cy: "readonly",
        Cypress: "readonly",
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        beforeEach: "readonly",
        after: "readonly",
        afterEach: "readonly",
        expect: "readonly",
      },
    },
  },
]);