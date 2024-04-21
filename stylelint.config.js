module.exports = {
	extends: ['stylelint-config-standard-scss'],
	plugins: ['stylelint-plugin-defensive-css'],
	rules: {
		'plugin/use-defensive-css': [
			true,
			{
				'accidental-hover': true,
				'background-repeat': true,
				'custom-property-fallbacks': false,
				'flex-wrapping': true,
				'scroll-chaining': true,
				'scrollbar-gutter': true,
				'vendor-prefix-grouping': true,
			},
		],
		'scss/comment-no-loud': null,
		'scss/at-function-named-arguments': null,
		'selector-no-qualifying-type': null,
		'scss/media-feature-value-dollar-variable': null,
		'declaration-empty-line-before': 'never',
		'selector-class-pattern': null,
		'no-descending-specificity': null,
		'selector-pseudo-class-no-unknown': [
			true,
			{
				'ignorePseudoClasses': ['global'],
			},
		],
	},
};
