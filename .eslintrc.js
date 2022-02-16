const resolve = require('./resolve.js')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        vue: 'never',
        js: 'never',
        ts: 'never'
      },
    ],
    semi: ['error', 'never']
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      webpack: {
        config: {
          resolve,
        }
      },
    },
  },
  // https://www.freesion.com/article/35251244752/ 解决 settings 配置别名
};
