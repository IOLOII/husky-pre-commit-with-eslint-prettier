# 用于理解 pre-commit  eslint  prettier

> 项目中如需要使用语法校验：需要的操作：
> 拷贝 devDependencies 中所有依赖
> 添加 pre-commit 文件
> 添加 lint:fix 脚本
> （如需手动修复，执行 lint:fix 脚本）

以下为其他：

## [prettier 配置](https://prettier.io/docs/en/options) + [eslint 用法](https://eslint.org/docs/latest/use/command-line-interface)

`eslint-config-prettier` 和 `eslint-plugin-prettier` 是用于集成 ESLint 和 Prettier 的工具，它们的作用如下：
1. **`eslint-config-prettier`：**
    - **作用：** 主要用于禁用 ESLint 中与 Prettier 冲突的格式化规则，确保 ESLint 不会干扰 Prettier 的格式化工作。因为 ESLint 和 Prettier 可能会有一些相互冲突的规则，`eslint-config-prettier` 的作用是关闭 ESLint 中可能与 Prettier 冲突的规则，以保证两者能够协同工作。
    - **使用方法：** 在 ESLint 配置文件中的 `extends` 数组中添加 `'plugin:prettier/recommended'`。这样，`eslint-config-prettier` 的配置将被应用，禁用掉与 Prettier 冲突的规则。

2. **`eslint-plugin-prettier`：**
    - **作用：** `eslint-plugin-prettier` 是一个 ESLint 插件，用于在 ESLint 中运行 Prettier，并在发现格式问题时通过 ESLint 报告这些问题。它的作用是将 Prettier 作为 ESLint 的规则运行，并将格式化问题作为 ESLint 的错误或警告进行报告。
    - **使用方法：** 在 ESLint 配置文件的 `plugins` 数组中添加 `'prettier'`，并在 `rules` 中添加 `'prettier/prettier': 'error'`。这样，`eslint-plugin-prettier` 将在 ESLint 中启用 Prettier，并将格式问题报告为 ESLint 错误。
总体而言，这两个工具的使用帮助确保 ESLint 和 Prettier 在项目中能够很好地协同工作，同时避免了它们之间的一些潜在冲突。


## 有效运行脚本：
npm run lint

## 安装脚本
### husky
```shell
npm install husky --save-dev
npm pkg set scripts.prepare="husky install"
npm run prepare
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
git commit -m "commit"
# `npm test` 将运行


# lint-staged 要求node>18
npm install --save-dev lint-staged
# 设置pre-commitgit hook 来运行lint-staged
# 添加 npx lint-staged 在 pre-commit
# 终端区域配置显示输出选项，切至git,eslint选项 即可看到实时错误信息
npm init @eslint/config
```

注意直接拷贝本项目中的eslint配置可能会出现问题，本项目中配置的为前端项目配置，直接放在node cjs项目中会出现错误，比如 `error  'require' is not defined  no-undef`
需要执行 重新定义eslint配置，拷贝本项目中的 rules extends plugins 覆盖就可以了
```shell
npm init @eslint/config
```
