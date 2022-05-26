module.exports = {
  env: {
    jest: true,
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
    _: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    quotes: ['error', 'single'],
    'vue/no-v-model-argument': 'off',
    'no-param-reassign': 0,
  },
};
