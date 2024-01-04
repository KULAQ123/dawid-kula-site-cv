/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    "prettier/prettier": "error",
    "no-multiple-empty-lines": ["warn", { max: 1 }],
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["vue", "prettier"],
  ignorePatterns: ["node_modules/", "vendor/", "public/"],
};
