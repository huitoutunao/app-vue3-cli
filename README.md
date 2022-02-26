# app-vue3-cli

通过 `@vue/cli4` 初始 `vue3 + ts` 项目模板。

## 说明

### Eslint

`vue-cli4 airbnb` 的 `eslint` 就默认配置了，按照推荐 `.vue` 文件后缀还是写上吧。[详情链接](https://github.com/vuejs/eslint-config-airbnb/blob/master/index.js)

`错误提示语：TS2307: Cannot find module '@/components/HelloWorld' or its corresponding type declarations.`
看错误提示意思是 `typescript` 编译器识别不了 `.vue` 后缀的文件。

### Prettier

安装 `prettier` 插件时，可以遵循[官方推荐](https://github.com/vuejs/eslint-config-prettier/blob/main/README.md)配置，注意要求依赖版本满足 `eslint >= 7.28.0` 和 `prettier >= 2.0.0`。

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
