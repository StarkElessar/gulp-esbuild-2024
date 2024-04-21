module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'no-mixed-spaces-and-tabs': [
			'error',
			'smart-tabs'
		],
		'no-empty': [
			"error",
			{ allowEmptyCatch: true }
		],
		"@typescript-eslint/ban-ts-comment": [
			"error",
			{
				"ts-expect-error": false,
				"ts-ignore": false
			}
		],
	},
};
