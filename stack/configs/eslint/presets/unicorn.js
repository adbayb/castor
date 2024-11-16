import unicornPlugin from "eslint-plugin-unicorn";

import { JAVASCRIPT_LIKE_EXTENSIONS } from "../constants.js";

export const config = [
	{
		files: JAVASCRIPT_LIKE_EXTENSIONS,
		plugins: {
			unicorn: unicornPlugin,
		},
		rules: {
			"unicorn/better-regex": "error",
			"unicorn/catch-error-name": [
				"error",
				{
					name: "error",
				},
			],
			"unicorn/consistent-empty-array-spread": "error",
			"unicorn/consistent-existence-index-check": "error",
			"unicorn/consistent-function-scoping": "error",
			"unicorn/custom-error-definition": "error",
			"unicorn/error-message": "error",
			"unicorn/escape-case": "error",
			"unicorn/expiring-todo-comments": "error",
			"unicorn/explicit-length-check": "error",
			"unicorn/filename-case": [
				"error",
				{
					cases: {
						camelCase: true,
						pascalCase: true,
					},
				},
			],
			"unicorn/new-for-builtins": "error",
			"unicorn/no-abusive-eslint-disable": "error",
			"unicorn/no-array-callback-reference": "error",
			"unicorn/no-array-push-push": "error",
			"unicorn/no-await-in-promise-methods": "error",
			"unicorn/no-console-spaces": "error",
			"unicorn/no-document-cookie": "error",
			"unicorn/no-empty-file": "error",
			"unicorn/no-for-loop": "error",
			"unicorn/no-instanceof-array": "error",
			"unicorn/no-invalid-fetch-options": "error",
			"unicorn/no-invalid-remove-event-listener": "error",
			"unicorn/no-length-as-slice-end": "error",
			"unicorn/no-new-buffer": "error",
			"unicorn/no-object-as-default-parameter": "error",
			"unicorn/no-process-exit": "error",
			"unicorn/no-single-promise-in-promise-methods": "error",
			"unicorn/no-static-only-class": "error",
			"unicorn/no-typeof-undefined": "error",
			"unicorn/no-unnecessary-polyfills": "error",
			"unicorn/no-unreadable-array-destructuring": "error",
			"unicorn/no-unreadable-iife": "error",
			"unicorn/no-unused-properties": "error",
			"unicorn/no-useless-fallback-in-spread": "error",
			"unicorn/no-useless-length-check": "error",
			"unicorn/no-useless-promise-resolve-reject": "error",
			"unicorn/no-useless-spread": "error",
			"unicorn/no-zero-fractions": "error",
			"unicorn/number-literal-case": "error",
			"unicorn/prefer-add-event-listener": "error",
			"unicorn/prefer-array-find": "error",
			"unicorn/prefer-array-flat": "error",
			"unicorn/prefer-array-flat-map": "error",
			"unicorn/prefer-array-index-of": "error",
			"unicorn/prefer-array-some": "error",
			"unicorn/prefer-blob-reading-methods": "error",
			"unicorn/prefer-code-point": "error",
			"unicorn/prefer-date-now": "error",
			"unicorn/prefer-dom-node-append": "error",
			"unicorn/prefer-dom-node-remove": "error",
			"unicorn/prefer-dom-node-text-content": "error",
			"unicorn/prefer-event-target": "error",
			"unicorn/prefer-export-from": "error",
			"unicorn/prefer-global-this": "error",
			"unicorn/prefer-includes": "error",
			"unicorn/prefer-keyboard-event-key": "error",
			"unicorn/prefer-logical-operator-over-ternary": "error",
			"unicorn/prefer-math-min-max": "error",
			"unicorn/prefer-math-trunc": "error",
			"unicorn/prefer-modern-dom-apis": "error",
			"unicorn/prefer-modern-math-apis": "error",
			"unicorn/prefer-module": "error",
			"unicorn/prefer-native-coercion-functions": "error",
			"unicorn/prefer-negative-index": "error",
			"unicorn/prefer-number-properties": "error",
			"unicorn/prefer-object-from-entries": "error",
			"unicorn/prefer-optional-catch-binding": "error",
			"unicorn/prefer-prototype-methods": "error",
			"unicorn/prefer-query-selector": "error",
			"unicorn/prefer-reflect-apply": "error",
			"unicorn/prefer-regexp-test": "error",
			"unicorn/prefer-set-has": "error",
			"unicorn/prefer-set-size": "error",
			"unicorn/prefer-spread": "error",
			"unicorn/prefer-string-raw": "error",
			"unicorn/prefer-string-replace-all": "error",
			"unicorn/prefer-string-slice": "error",
			"unicorn/prefer-string-starts-ends-with": "error",
			"unicorn/prefer-string-trim-start-end": "error",
			"unicorn/prefer-structured-clone": "error",
			"unicorn/prefer-switch": "error",
			"unicorn/prefer-ternary": "error",
			"unicorn/prefer-top-level-await": "error",
			"unicorn/prefer-type-error": "error",
			"unicorn/prevent-abbreviations": "error",
			"unicorn/relative-url-style": ["error", "always"],
			"unicorn/require-array-join-separator": "error",
			"unicorn/require-number-to-fixed-digits-argument": "error",
		},
	},
];
