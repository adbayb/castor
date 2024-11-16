import sonarjsPlugin from "eslint-plugin-sonarjs";

import { JAVASCRIPT_LIKE_EXTENSIONS } from "../constants.js";

export const config = [
	{
		files: JAVASCRIPT_LIKE_EXTENSIONS,
		plugins: {
			sonarjs: sonarjsPlugin,
		},
		rules: {
			"sonarjs/alt-text": "error",
			"sonarjs/anchor-has-content": "error",
			"sonarjs/anchor-is-valid": "error",
			"sonarjs/anchor-precedence": "error",
			"sonarjs/arguments-order": "error",
			"sonarjs/arguments-usage": "error",
			"sonarjs/array-constructor": "error",
			"sonarjs/assertions-in-tests": "error",
			"sonarjs/bitwise-operators": "error",
			"sonarjs/bool-param-default": "error",
			"sonarjs/call-argument-line": "error",
			"sonarjs/certificate-transparency": "error",
			"sonarjs/class-name": "error",
			"sonarjs/class-prototype": "error",
			"sonarjs/code-eval": "error",
			"sonarjs/cognitive-complexity": ["error", 15], // Measure code readability (the more the code is nested, the more it's difficult to understand)
			"sonarjs/comma-or-logical-or-case": "error",
			"sonarjs/concise-regex": "error",
			"sonarjs/confidential-information-logging": "error",
			"sonarjs/constructor-for-side-effects": "error",
			"sonarjs/content-length": "error",
			"sonarjs/content-security-policy": "error",
			"sonarjs/cookie-no-httponly": "error",
			"sonarjs/cors": "error",
			"sonarjs/csrf": "error",
			"sonarjs/cyclomatic-complexity": ["error", { threshold: 10 }], // Measure code testability (the more paths are, the more test cases need to be implemented)
			"sonarjs/different-types-comparison": "error",
			"sonarjs/disabled-auto-escaping": "error",
			"sonarjs/disabled-resource-integrity": "error",
			"sonarjs/duplicates-in-character-class": "error",
			"sonarjs/elseif-without-else": "error",
			"sonarjs/empty-string-repetition": "error",
			"sonarjs/encryption-secure-mode": "error",
			"sonarjs/existing-groups": "error",
			"sonarjs/expression-complexity": ["error", { max: 3 }],
			"sonarjs/file-name-differ-from-class": "error",
			"sonarjs/file-permissions": "error",
			"sonarjs/file-uploads": "error",
			"sonarjs/fixme-tag": "error",
			"sonarjs/for-in": "error",
			"sonarjs/for-loop-increment-sign": "error",
			"sonarjs/frame-ancestors": "error",
			"sonarjs/function-inside-loop": "error",
			"sonarjs/function-name": "error",
			"sonarjs/generator-without-yield": "error",
			"sonarjs/hashing": "error",
			"sonarjs/hidden-files": "error",
			"sonarjs/html-has-lang": "error",
			"sonarjs/in-operator-type-error": "error",
			"sonarjs/inconsistent-function-call": "error",
			"sonarjs/index-of-compare-to-positive-number": "error",
			"sonarjs/insecure-cookie": "error",
			"sonarjs/insecure-jwt-token": "error",
			"sonarjs/inverted-assertion-arguments": "error",
			"sonarjs/label-has-associated-control": "error",
			"sonarjs/label-position": "error",
			"sonarjs/link-with-target-blank": "error",
			"sonarjs/max-switch-cases": "error",
			"sonarjs/media-has-caption": "error",
			"sonarjs/misplaced-loop-counter": "error",
			"sonarjs/mouse-events-a11y": "error",
			"sonarjs/new-cap": "error",
			"sonarjs/new-operator-misuse": "error",
			"sonarjs/no-all-duplicated-branches": "error",
			"sonarjs/no-alphabetical-sort": "error",
			"sonarjs/no-angular-bypass-sanitization": "error",
			"sonarjs/no-array-delete": "error",
			"sonarjs/no-array-index-key": "error",
			"sonarjs/no-associative-arrays": "error",
			"sonarjs/no-async-constructor": "error",
			"sonarjs/no-base-to-string": "error",
			"sonarjs/no-case-label-in-switch": "error",
			"sonarjs/no-clear-text-protocols": "error",
			"sonarjs/no-code-after-done": "error",
			"sonarjs/no-collection-size-mischeck": "error",
			"sonarjs/no-commented-code": "error",
			"sonarjs/no-dead-store": "error",
			"sonarjs/no-delete-var": "error",
			"sonarjs/no-duplicate-in-composite": "error",
			"sonarjs/no-duplicated-branches": "error",
			"sonarjs/no-element-overwrite": "error",
			"sonarjs/no-empty-after-reluctant": "error",
			"sonarjs/no-empty-alternatives": "error",
			"sonarjs/no-empty-collection": "error",
			"sonarjs/no-empty-group": "error",
			"sonarjs/no-empty-test-file": "error",
			"sonarjs/no-equals-in-for-termination": "error",
			"sonarjs/no-exclusive-tests": "error",
			"sonarjs/no-extend-native": "error",
			"sonarjs/no-extra-arguments": "error",
			"sonarjs/no-global-this": "error",
			"sonarjs/no-globals-shadowing": "error",
			"sonarjs/no-gratuitous-expressions": "error",
			"sonarjs/no-hardcoded-credentials": "error",
			"sonarjs/no-hardcoded-ip": "error",
			"sonarjs/no-hook-setter-in-body": "error",
			"sonarjs/no-identical-conditions": "error",
			"sonarjs/no-identical-expressions": "error",
			"sonarjs/no-identical-functions": "error",
			"sonarjs/no-ignored-exceptions": "error",
			"sonarjs/no-ignored-return": "error",
			"sonarjs/no-implicit-dependencies": "error",
			"sonarjs/no-implicit-global": "error",
			"sonarjs/no-in-misuse": "error",
			"sonarjs/no-incomplete-assertions": "error",
			"sonarjs/no-incorrect-string-concat": "error",
			"sonarjs/no-infinite-loop": "error",
			"sonarjs/no-internal-api-use": "error",
			"sonarjs/no-intrusive-permissions": "error",
			"sonarjs/no-invalid-await": "error",
			"sonarjs/no-invariant-returns": "error",
			"sonarjs/no-inverted-boolean-check": "error",
			"sonarjs/no-ip-forward": "error",
			"sonarjs/no-labels": "error",
			"sonarjs/no-lonely-if": "error",
			"sonarjs/no-mime-sniff": "error",
			"sonarjs/no-misleading-array-reverse": "error",
			"sonarjs/no-misused-promises": "error",
			"sonarjs/no-mixed-content": "error",
			"sonarjs/no-nested-assignment": "error",
			"sonarjs/no-nested-functions": "error",
			"sonarjs/no-nested-incdec": "error",
			"sonarjs/no-nested-switch": "error",
			"sonarjs/no-nested-template-literals": "error",
			"sonarjs/no-one-iteration-loop": "error",
			"sonarjs/no-os-command-from-path": "error",
			"sonarjs/no-parameter-reassignment": "error",
			"sonarjs/no-primitive-wrappers": "error",
			"sonarjs/no-redundant-assignments": "error",
			"sonarjs/no-redundant-boolean": "error",
			"sonarjs/no-redundant-jump": "error",
			"sonarjs/no-referrer-policy": "error",
			"sonarjs/no-same-argument-assert": "error",
			"sonarjs/no-selector-parameter": "error",
			"sonarjs/no-self-compare": "error",
			"sonarjs/no-self-import": "error",
			"sonarjs/no-small-switch": "error",
			"sonarjs/no-table-as-layout": "error",
			"sonarjs/no-undefined-argument": "error",
			"sonarjs/no-unenclosed-multiline-block": "error",
			"sonarjs/no-uniq-key": "error",
			"sonarjs/no-unsafe-unzip": "error",
			"sonarjs/no-unthrown-error": "error",
			"sonarjs/no-unused-collection": "error",
			"sonarjs/no-useless-call": "error",
			"sonarjs/no-useless-increment": "error",
			"sonarjs/no-useless-intersection": "error",
			"sonarjs/no-useless-react-setstate": "error",
			"sonarjs/no-vue-bypass-sanitization": "error",
			"sonarjs/no-weak-cipher": "error",
			"sonarjs/no-weak-keys": "error",
			"sonarjs/non-existent-operator": "error",
			"sonarjs/null-dereference": "error",
			"sonarjs/object-alt-content": "error",
			"sonarjs/os-command": "error",
			"sonarjs/post-message": "error",
			"sonarjs/prefer-default-last": "error",
			"sonarjs/prefer-enum-initializers": "error",
			"sonarjs/prefer-function-type": "error",
			"sonarjs/prefer-immediate-return": "error",
			"sonarjs/prefer-namespace-keyword": "error",
			"sonarjs/prefer-object-literal": "error",
			"sonarjs/prefer-object-spread": "error",
			"sonarjs/prefer-promise-shorthand": "error",
			"sonarjs/prefer-single-boolean-return": "error",
			"sonarjs/prefer-type-guard": "error",
			"sonarjs/prefer-while": "error",
			"sonarjs/production-debug": "error",
			"sonarjs/pseudo-random": "error",
			"sonarjs/public-static-readonly": "error",
			"sonarjs/publicly-writable-directories": "error",
			"sonarjs/reduce-initial-value": "error",
			"sonarjs/session-regeneration": "error",
			"sonarjs/single-char-in-character-classes": "error",
			"sonarjs/single-character-alternation": "error",
			"sonarjs/sonar-jsx-no-leaked-render": "error",
			"sonarjs/sonar-max-lines": ["error", { maximum: 1000 }],
			"sonarjs/sonar-max-lines-per-function": ["error", { maximum: 200 }],
			"sonarjs/sonar-max-params": ["error", { max: 4 }],
			"sonarjs/sonar-no-control-regex": "error",
			"sonarjs/sonar-no-empty-character-class": "error",
			"sonarjs/sonar-no-fallthrough": "error",
			"sonarjs/sonar-no-invalid-regexp": "error",
			"sonarjs/sonar-no-magic-numbers": "error",
			"sonarjs/sonar-no-misleading-character-class": "error",
			"sonarjs/sonar-no-regex-spaces": "error",
			// "sonarjs/sonar-no-unused-class-component-methods": "error", // Disabled since it involves `eslint-plugin-react` activation
			"sonarjs/sql-queries": "error",
			"sonarjs/stable-tests": "error",
			"sonarjs/stateful-regex": "error",
			"sonarjs/strict-transport-security": "error",
			"sonarjs/super-invocation": "error",
			"sonarjs/switch-without-default": "error",
			"sonarjs/table-header": "error",
			"sonarjs/table-header-reference": "error",
			"sonarjs/test-check-exception": "error",
			"sonarjs/todo-tag": "warn",
			"sonarjs/unicode-aware-regex": "error",
			"sonarjs/unnecessary-character-escapes": "error",
			"sonarjs/unused-named-groups": "error",
			"sonarjs/unverified-certificate": "error",
			"sonarjs/unverified-hostname": "error",
			"sonarjs/updated-loop-counter": "error",
			"sonarjs/use-isnan": "error",
			"sonarjs/use-type-alias": "error",
			"sonarjs/void-use": "error",
			"sonarjs/weak-ssl": "error",
			"sonarjs/x-powered-by": "error",
			"sonarjs/xml-parser-xxe": "error",
		},
	},
];
