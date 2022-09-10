/** @type{import("eslint").Linter.BaseConfig} */
module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': ['warn'],
  },
  root: true,
}
