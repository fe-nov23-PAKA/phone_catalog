module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "@mate-academy/eslint-config-react-typescript",
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "max-len": "off",
  },
};
