module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020, // Allows parsing of ECMAScript version (2020 is the latest)
		sourceType: 'module', // Allows using imports
		ecmaFeatures: {
			jsx: true, // React .JSX-files support
		},
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['@app', './src'],
				],
				extensions: ['.js', '.ts', '.tsx'],
			},
		},
		react: {
			version: 'detect',
		},
		polyfills: [
			'Promise',
			'URL',
			'URLSearchParams',
		],
	},
	extends: [
		'airbnb',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:compat/recommended',
		'plugin:sonarjs/recommended',
	],
	plugins: [
		'@typescript-eslint',
	],
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off', // Allow using const a = require('module') for .js files
			},
		},
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'no-underscore-dangle': 'off',
				'react/jsx-props-no-multi-spaces': 'off',
				'react/function-component-definition': 'off',
			},
		},
	],
	rules: {
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],

		'no-console': 'off', // allow console.log for better debugging
		'arrow-body-style': 'off', // allow block body (denoted by curly braces) for better debugging
		indent: ['error', 'tab'], // Force tabs for idents
		'no-tabs': 'off', // Allow using tabs
		'linebreak-style': 'off', // Both Windows and Linux linebreak support
		'implicit-arrow-linebreak': 'off', // Allow arrow function bodies on both same line and new line
		'max-len': ['error', { code: 150, tabWidth: 4 }],
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'return' },
		],
		'space-infix-ops': ['error'],
		'class-methods-use-this': 'off',

		'import/prefer-default-export': 'off', // Don't force default export for files containing one export only
		'import/no-default-export': 'error', // Don't use default export as it is not always clear and readable
		'import/extensions': [
			'error',
			'never',
			{
				'.png': 'always',
				'.svg': 'always',
			},
		],
		'import/order': [
			'error', {
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
					{
						pattern: '*',
						group: 'external',
						position: 'after',
					},
					{
						pattern: '@common/**',
						group: 'internal',
						position: 'before',
					},
					{
						pattern: '@app/**',
						group: 'internal',
						position: 'before',
					},
					{
						pattern: '**.(s?)css',
						group: 'external',
						position: 'after',
					},
					{
						pattern: '**.(s?)css',
						group: 'internal',
						position: 'after',
					},
				],
				'newlines-between': 'always-and-inside-groups',
			},
		],

		'react/state-in-constructor': ['error', 'never'], // Forbid setting states in constructor - specify with prop setter
		'react/jsx-indent': ['error', 'tab', { checkAttributes: true, indentLogicalExpressions: true }], // Ident .jsx nodes with tabs
		'react/jsx-indent-props': ['error', 'tab'], // Ident .jsx node props with tabs
		'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
		'react/destructuring-assignment': 'off',
		'react/jsx-props-no-spreading': 'off', // Allow spread operator
		'react/prop-types': 'off', // Allow components without propTypes
		'react/display-name': 'off', // Allow skipping displayName for React components
		'react/sort-comp': 'off', // Disable abc sorting of methods/props
		'react/require-default-props': 'off', // Allow skipping default props
		'react/no-unescaped-entities': 'off', // allow quotation marks
		'react/jsx-props-no-multi-spaces': 'off', // Allow blank line between component props

		'react/jsx-one-expression-per-line': 'off',

		'@typescript-eslint/no-var-requires': 'off', // Allow require imports
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off', // Allow non-null assertions - this is for defaultProps
		'@typescript-eslint/array-type': [
			'error', {
				default: 'generic',
			},
		],

		'no-shadow': 'off', // Adds support for TypeScript's this parameters and global augmentation
		'global-require': 'off',
		camelcase: ['error', { allow: ['UNSAFE'] }], // Allow UNSAFE_ lifecycle method to be dashed
		'no-plusplus': 'off',
		'prefer-destructuring': 'off',
		'lines-between-class-members': [
			'error',
			'always', {
				exceptAfterSingleLine: true,
			},
		],
		'unicode-bom': 'off',
	},
};
