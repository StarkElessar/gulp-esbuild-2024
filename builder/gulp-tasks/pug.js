import * as Gulp from 'gulp';
import gulpPug from 'gulp-pug';
import gulpHTMLMin from 'gulp-htmlmin';
import gulpIf from 'gulp-if';
import gulpVersionNumber from 'gulp-version-number';

import { handleError } from '../plugins/handle-error.js';

export const pug = (isDev, serverInstance) => {
	const version = gulpVersionNumber({
		value: '%DT%', append: {
			key: '_v', cover: 0, to: ['css', 'js'],
		}, output: {
			file: 'builder/version.json',
		},
	});

	return Gulp.src('./src/views/*.pug')
		.pipe(handleError('PUG - HTML'))
		.pipe(gulpPug({
			pretty: true,
			verbose: true,
			locals: {
				// TODO: переменные JSON
			},
		}))
		.pipe(gulpHTMLMin({
			useShortDoctype: true,
			sortClassName: true,
			removeComments: !isDev,

			/** Uncomment if html minification is required */
			// collapseWhitespace: isBuild,
		}))
		.pipe(gulpIf(!isDev, version))
		.pipe(Gulp.dest('./dist'))
		.pipe(gulpIf(isDev, serverInstance.stream()));
};
