<div align="center">
    <h1>🦦 Stack</h1>
    <strong>My opinionated environment to ease project building</strong>
</div>
<br>
<br>

The mono-repository includes:

## 💿 Binaries

-   [Initializer](./packages/create)
-   [Scripts](./packages/scripts)

## 🏗️ Configuration presets

-   [Linting](./packages/eslint-config)
-   [Formatting](./packages/prettier-config)
-   [Typing](./packages/ts-config)

## ✅ TODO

-   [ ] Check if it's ok to have `commitlint`, `eslint`, ... as dependencies in `@adbayb/scripts` by removing monorepo root dev dependencies
-   [ ] Update `@adbayb/create` to include VSCode template
-   [ ] Update `@adbayb/scripts` to make `tsc` check feasible on git hooks (via eslint-plugin-tsc?)
