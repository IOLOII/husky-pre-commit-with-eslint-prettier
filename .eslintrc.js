module.exports = {
  extends: [require.resolve("@umijs/lint/dist/config/eslint")],
  env: {
    browser: true,
    es2021: true,
  },
  // 'extends': 'eslint:recommended',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-debugger": "error",
    // 'indent': [
    // 	'error',
    // 	'tab'
    // ],
    "linebreak-style": "off",
    // 'quotes': [
    // 	'error',
    // 	'single'
    // ],
    // 'semi': [
    // 	'error',
    // 	'always'
    // ]
    eqeqeq: "error",
    "no-multi-spaces": "error",
    "no-unused-vars": "error",
  },
};
