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
    '@vue/prettier',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
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
    semi: ['error', 'never'],
    // 'import/extensions': [
    //   'error',
    //   'always',
    //   {
    //     js: 'never',
    //     mjs: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],
  },
  settings: {
    /**
     * https://github.com/vuejs/eslint-config-airbnb/blob/master/index.js
     * vue-cli4 airbnb 的 eslint 就默认配置了，按照推荐 .vue 文件后缀还是写上吧
     * 错误提示语：TS2307: Cannot find module '@/components/HelloWorld' or its corresponding type declarations.
     * 看错误提示意思是 typescript 编译器识别不了 .vue 后缀的文件
     */
    // 'import/resolver': {
    //   webpack: {
    //     config: require.resolve('@vue/cli-service/webpack.config.js')
    //   }
    // },
    // 'import/extensions': [
    //   '.js',
    //   '.jsx',
    //   '.mjs',
    //   '.ts',
    //   '.tsx',
    // ],
  },
}
