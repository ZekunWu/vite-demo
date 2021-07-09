module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    '@tencent/eslint-config-tencent',
    'plugin:vue/essential',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    quotes: ['error', 'single'],
  },
};
