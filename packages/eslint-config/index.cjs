/* eslint-disable sort-keys-custom-order/object-keys */
/**
 * @type {import("eslint").ESLint.ConfigData}
 */
module.exports = {
	root: true,
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		"import/resolver": {
			typescript: true,
			node: true,
		},
		react: {
			version: "detect",
		},
	},
	extends: [
		"eslint:recommended",
		"plugin:prettier/recommended",
		"plugin:astro/recommended",
	],
	plugins: [
		"jest",
		"import",
		"react",
		"react-hooks",
		"sonarjs",
		"sort-keys-custom-order",
	],
	overrides: [
		{
			files: ["**/*.ts?(x)"],
			parser: "@typescript-eslint/parser",
			extends: [
				// @note: following line disables recommended eslint rules already checked by TS:
				"plugin:@typescript-eslint/eslint-recommended",
				"plugin:import/typescript",
			],
			parserOptions: {
				tsconfigRootDir: process.cwd(),
				project: ["./tsconfig.json"],
			},
			plugins: ["@typescript-eslint", "deprecation"],
			rules: {
				"@typescript-eslint/adjacent-overload-signatures": "error",
				// https://www.totaltypescript.com/array-types-in-typescript
				"@typescript-eslint/array-type": [
					"error",
					{ default: "array", readonly: "array" },
				],
				"@typescript-eslint/await-thenable": "error",
				"@typescript-eslint/ban-ts-comment": [
					"error",
					{
						"ts-expect-error": "allow-with-description",
						"ts-ignore": "allow-with-description",
						"ts-nocheck": "allow-with-description",
						"ts-check": false,
						minimumDescriptionLength: 3,
					},
				],
				"@typescript-eslint/ban-types": "error",
				"@typescript-eslint/class-literal-property-style": [
					"error",
					"fields",
				],
				"@typescript-eslint/consistent-generic-constructors": [
					"error",
					"constructor",
				],
				"@typescript-eslint/consistent-indexed-object-style": [
					"error",
					"record",
				],
				"@typescript-eslint/consistent-type-assertions": [
					"error",
					{
						assertionStyle: "as",
						objectLiteralTypeAssertions: "allow-as-parameter",
					},
				],
				// https://www.totaltypescript.com/type-vs-interface-which-should-you-use
				"@typescript-eslint/consistent-type-definitions": [
					"error",
					"type",
				],
				"@typescript-eslint/consistent-type-imports": [
					"error",
					{
						disallowTypeAnnotations: true,
						fixStyle: "separate-type-imports",
						prefer: "type-imports",
					},
				],
				"@typescript-eslint/consistent-type-exports": [
					"error",
					{ fixMixedExportsWithInlineTypeSpecifier: false },
				],
				"@typescript-eslint/explicit-member-accessibility": [
					"error",
					{ accessibility: "explicit" },
				],
				"@typescript-eslint/method-signature-style": [
					"error",
					"property",
				],
				"@typescript-eslint/no-base-to-string": "error",
				"@typescript-eslint/no-confusing-non-null-assertion": "error",
				"@typescript-eslint/no-confusing-void-expression": "error",
				"@typescript-eslint/no-duplicate-enum-values": "error",
				"@typescript-eslint/no-duplicate-type-constituents": "error",
				"@typescript-eslint/no-dynamic-delete": "error",
				"@typescript-eslint/no-empty-interface": "error",
				"@typescript-eslint/no-explicit-any": [
					"error",
					{ fixToUnknown: true, ignoreRestArgs: false },
				],
				"@typescript-eslint/no-extra-non-null-assertion": "error",
				"@typescript-eslint/no-extraneous-class": "error",
				"@typescript-eslint/no-floating-promises": "error",
				"@typescript-eslint/no-for-in-array": "error",
				"@typescript-eslint/no-import-type-side-effects": "error",
				"@typescript-eslint/no-inferrable-types": "error",
				"@typescript-eslint/no-invalid-void-type": "error",
				"@typescript-eslint/no-meaningless-void-operator": "error",
				"@typescript-eslint/no-misused-new": "error",
				"@typescript-eslint/no-misused-promises": "error",
				"@typescript-eslint/no-mixed-enums": "error",
				"@typescript-eslint/no-namespace": "error",
				"@typescript-eslint/no-non-null-asserted-nullish-coalescing":
					"error",
				"@typescript-eslint/no-non-null-asserted-optional-chain":
					"error",
				"@typescript-eslint/no-non-null-assertion": "error",
				"@typescript-eslint/no-this-alias": "error",
				"@typescript-eslint/no-unnecessary-boolean-literal-compare":
					"error",
				"@typescript-eslint/no-unnecessary-condition": "error",
				"@typescript-eslint/no-unnecessary-qualifier": "error",
				"@typescript-eslint/no-unnecessary-type-arguments": "error",
				"@typescript-eslint/no-unnecessary-type-assertion": "error",
				"@typescript-eslint/no-unnecessary-type-constraint": "error",
				"@typescript-eslint/no-unsafe-argument": "error",
				"@typescript-eslint/no-unsafe-assignment": "error",
				"@typescript-eslint/no-unsafe-call": "error",
				"@typescript-eslint/no-unsafe-declaration-merging": "error",
				"@typescript-eslint/no-unsafe-enum-comparison": "error",
				"@typescript-eslint/no-unsafe-member-access": "error",
				"@typescript-eslint/no-unsafe-return": "error",
				"@typescript-eslint/no-useless-empty-export": "error",
				"@typescript-eslint/no-var-requires": "error",
				"@typescript-eslint/prefer-as-const": "error",
				"@typescript-eslint/prefer-for-of": "error",
				"@typescript-eslint/prefer-function-type": "error",
				"@typescript-eslint/prefer-includes": "error",
				"@typescript-eslint/prefer-literal-enum-member": "error",
				"@typescript-eslint/prefer-namespace-keyword": "error",
				"@typescript-eslint/prefer-nullish-coalescing": "error",
				"@typescript-eslint/prefer-optional-chain": "error",
				"@typescript-eslint/prefer-readonly": "error",
				"@typescript-eslint/prefer-regexp-exec": "error",
				"@typescript-eslint/prefer-return-this-type": "error",
				"@typescript-eslint/prefer-string-starts-ends-with": "error",
				"@typescript-eslint/prefer-ts-expect-error": "error",
				"@typescript-eslint/promise-function-async": "error",
				"@typescript-eslint/restrict-plus-operands": "error",
				"@typescript-eslint/restrict-template-expressions": "error",
				"@typescript-eslint/sort-type-constituents": "error",
				"@typescript-eslint/switch-exhaustiveness-check": "error",
				"@typescript-eslint/triple-slash-reference": "error",
				"@typescript-eslint/unbound-method": "error",
				"@typescript-eslint/unified-signatures": "error",
				"class-methods-use-this": "off",
				"@typescript-eslint/class-methods-use-this": "error",
				"default-param-last": "off",
				"@typescript-eslint/default-param-last": "error",
				"dot-notation": "off",
				"@typescript-eslint/dot-notation": "error",
				"no-array-constructor": "off",
				"@typescript-eslint/no-array-constructor": "error",
				"no-dupe-class-members": "off",
				"@typescript-eslint/no-dupe-class-members": "error",
				"no-empty-function": "off",
				"@typescript-eslint/no-empty-function": "error",
				"no-extra-semi": "off",
				"@typescript-eslint/no-extra-semi": "error",
				"no-implied-eval": "off",
				"@typescript-eslint/no-implied-eval": "error",
				"no-invalid-this": "off",
				"@typescript-eslint/no-invalid-this": "error",
				"no-loop-func": "off",
				"@typescript-eslint/no-loop-func": "error",
				"no-loss-of-precision": "off",
				"@typescript-eslint/no-loss-of-precision": "error",
				"no-redeclare": "off",
				"@typescript-eslint/no-redeclare": "error",
				"no-return-await": "off",
				"@typescript-eslint/return-await": "error",
				"no-shadow": "off",
				"@typescript-eslint/no-shadow": "error",
				"no-throw-literal": "off",
				"@typescript-eslint/no-throw-literal": "error",
				"require-await": "off",
				"@typescript-eslint/require-await": "error",
				"no-unused-expressions": "off",
				"@typescript-eslint/no-unused-expressions": "error",
				"no-unused-vars": "off",
				"@typescript-eslint/no-unused-vars": [
					"error",
					{ ignoreRestSiblings: true },
				],
				"no-useless-constructor": "off",
				"@typescript-eslint/no-useless-constructor": "error",
				"deprecation/deprecation": "error",
				"import/consistent-type-specifier-style": [
					"error",
					"prefer-top-level",
				],
			},
		},
		{
			// Relaxed rules for example-like folder, and [config-, story-, and test]-like files
			files: [
				"examples/**",
				"website/**",
				"**/*.config.ts",
				"**/?(*.)stories.ts?(x)",
				"**/test.ts?(x)",
				"scripts/**",
			],
			rules: {
				"import/no-default-export": "off",
				"sonarjs/no-duplicate-string": "off",
			},
		},
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
		},
		{
			files: ["**/*.c[j|t]s"],
			rules: {
				"import/no-commonjs": "off",
			},
		},
		{
			files: ["**/*.md?(x)"],
			extends: ["plugin:mdx/recommended"],
			settings: {
				"mdx/code-blocks": "off",
			},
		},
	],
	rules: {
		// #region import
		"import/export": "error",
		"import/default": "error",
		"import/first": "error",
		"import/named": "error",
		"import/namespace": "error",
		"import/newline-after-import": "error",
		"import/no-absolute-path": "error",
		"import/no-amd": "error",
		"import/no-anonymous-default-export": "error",
		"import/no-commonjs": "error",
		"import/no-cycle": "error",
		"import/no-default-export": "error",
		"import/no-deprecated": "error",
		"import/no-duplicates": "error",
		"import/no-empty-named-blocks": "error",
		"import/no-extraneous-dependencies": "error",
		"import/no-import-module-exports": "error",
		"import/no-mutable-exports": "error",
		"import/no-named-as-default": "error",
		"import/no-named-as-default-member": "error",
		"import/no-namespace": "error",
		"import/no-relative-packages": "error",
		"import/no-self-import": "error",
		"import/no-unassigned-import": "error",
		"import/no-unresolved": ["error", { commonjs: true }],
		"import/no-unused-modules": "error",
		"import/no-useless-path-segments": [
			"error",
			{
				noUselessIndex: true,
				commonjs: true,
			},
		],
		"import/no-webpack-loader-syntax": "error",
		"import/order": [
			"error",
			{
				"newlines-between": "always",
				groups: [
					["builtin", "external"],
					"internal",
					"unknown",
					"parent",
					["sibling", "index"],
				],
			},
		],
		// #endregion
		// #region jest
		"jest/consistent-test-it": ["error", { fn: "test" }],
		"jest/expect-expect": "error",
		"jest/prefer-todo": "error",
		"jest/no-commented-out-tests": "error",
		"jest/no-conditional-expect": "error",
		"jest/no-disabled-tests": "error",
		"jest/no-done-callback": "error",
		"jest/no-export": "error",
		"jest/no-focused-tests": "error",
		"jest/no-identical-title": "error",
		"jest/no-jasmine-globals": "error",
		"jest/no-mocks-import": "error",
		"jest/no-standalone-expect": "error",
		"jest/no-test-prefixes": "error",
		"jest/prefer-hooks-on-top": "error",
		"jest/prefer-spy-on": "error",
		"jest/prefer-strict-equal": "error",
		"jest/prefer-to-be": "error",
		"jest/prefer-to-contain": "error",
		"jest/prefer-to-have-length": "error",
		"jest/valid-title": [
			"error",
			{
				mustMatch: { test: "^should" },
			},
		],
		// #endregion
		// #region react
		"react/display-name": "error",
		"react/jsx-boolean-value": "error",
		"react/jsx-fragments": "error",
		"react/jsx-key": "error",
		"react/jsx-no-useless-fragment": "warn",
		"react/jsx-pascal-case": "error",
		"react/jsx-sort-props": "error",
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"react/no-children-prop": "error",
		"react/no-danger": "error",
		"react/no-deprecated": "error",
		"react/no-direct-mutation-state": "error",
		"react/no-is-mounted": "error",
		"react/no-render-return-value": "error",
		"react/no-string-refs": "error",
		"react/no-unescaped-entities": "error",
		"react/prefer-stateless-function": "error",
		"react/self-closing-comp": "error",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		// #endregion react
		// #region sonarjs
		"sonarjs/cognitive-complexity": "error",
		"sonarjs/elseif-without-else": "error",
		"sonarjs/max-switch-cases": "error",
		"sonarjs/no-all-duplicated-branches": "error",
		"sonarjs/no-collapsible-if": "error",
		"sonarjs/no-collection-size-mischeck": "error",
		"sonarjs/no-duplicate-string": ["error", { threshold: 5 }],
		"sonarjs/no-duplicated-branches": "error",
		"sonarjs/no-element-overwrite": "error",
		"sonarjs/no-extra-arguments": "error",
		"sonarjs/no-gratuitous-expressions": "error",
		"sonarjs/no-identical-conditions": "error",
		"sonarjs/no-identical-functions": "error",
		"sonarjs/no-identical-expressions": "error",
		"sonarjs/no-inverted-boolean-check": "error",
		"sonarjs/no-one-iteration-loop": "error",
		"sonarjs/no-redundant-boolean": "error",
		"sonarjs/no-redundant-jump": "error",
		"sonarjs/no-same-line-conditional": "error",
		"sonarjs/no-small-switch": "error",
		"sonarjs/no-unused-collection": "error",
		"sonarjs/no-use-of-empty-return-value": "error",
		"sonarjs/no-useless-catch": "error",
		"sonarjs/non-existent-operator": "error",
		"sonarjs/prefer-immediate-return": "error",
		"sonarjs/prefer-object-literal": "error",
		"sonarjs/prefer-single-boolean-return": "error",
		"sonarjs/prefer-while": "error",
		// #endregion
		// #region eslint and others
		"no-alert": "error",
		"no-return-await": "error",
		"no-var": "error",
		"object-shorthand": ["error", "always"],
		"padding-line-between-statements": [
			"error",
			{
				blankLine: "always",
				prev: "*",
				next: "*",
			},
			{
				blankLine: "never",
				prev: ["const", "let", "var"],
				next: ["const", "let", "var"],
			},
			{
				blankLine: "never",
				prev: ["case", "default"],
				next: ["case", "default"],
			},
			{
				blankLine: "always",
				prev: ["multiline-const", "multiline-let", "multiline-var"],
				next: ["const", "let", "var"],
			},
			{
				blankLine: "always",
				prev: ["const", "let", "var"],
				next: ["multiline-const", "multiline-let", "multiline-var"],
			},
			{
				blankLine: "any",
				prev: ["expression"],
				next: ["expression"],
			},
			{
				blankLine: "any",
				prev: ["cjs-import"],
				next: ["const", "let", "var"],
			},
			{
				blankLine: "any",
				prev: ["cjs-import", "import"],
				next: ["cjs-import", "import"],
			},
			{
				blankLine: "any",
				prev: ["cjs-export", "export"],
				next: ["cjs-export", "export"],
			},
		],
		"prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
		"prefer-const": "error",
		"sort-imports": ["error", { ignoreDeclarationSort: true }],
		"sort-keys-custom-order/object-keys": [
			"error",
			{
				orderedKeys: [
					"id",
					"key",
					"name",
					"title",
					"label",
					"description",
				],
			},
		],
		"sort-keys-custom-order/type-keys": [
			"error",
			{
				orderedKeys: [
					"id",
					"key",
					"name",
					"title",
					"label",
					"description",
				],
			},
		],
		"sort-vars": "error",
		// #endregion
	},
};
