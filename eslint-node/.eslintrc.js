// eslint-disable-next-line no-unused-vars
const eslint = require("eslint");

/** @type{eslint.Linter.BaseConfig} */
module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "prettier/prettier": ["warn"],
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
  },
  root: true,
};
