module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    parser: "espree", // standardowy parser ESLinta
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier"
  ],
  plugins: ["vue"],
  rules: {
    'vue/require-default-prop': 'off',
    "no-multiple-empty-lines": ["warn", { max: 1 }],
  },
  ignorePatterns: ["node_modules/", "vendor/", "public/"],
};
