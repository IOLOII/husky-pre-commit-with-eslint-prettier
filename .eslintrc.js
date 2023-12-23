module.exports = {
  // extends: [require.resolve('@umijs/lint/dist/config/eslint')],
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
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',

  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  //  添加自定义规则
  rules: {
    'no-debugger': 'error',
    'indent': ['error', 2],
    'linebreak-style': 'off',
    'quotes': [
    	'error',
    	'single'
    ],

    semi: ['error', 'never'], // 不使用分号
    eqeqeq: 'error',
    'no-multi-spaces': 'error',
    'no-unused-vars': 'error',
    'json/json': 'error',
  },
  plugins: [
    'json',
  ]
}
