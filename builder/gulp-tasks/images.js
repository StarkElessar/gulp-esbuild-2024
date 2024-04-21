import * as Gulp from 'gulp';
import webp from 'gulp-webp';
import newer from 'gulp-newer';
import imagemin, { svgo, mozjpeg, optipng, gifsicle } from 'gulp-imagemin';
import gulpIf from 'gulp-if';

import { handleError } from '../plugins/handle-error.js';

export const images = (isDev, serverInstance) => {
	return Gulp.src('src/images/**/*.{jpg,jpeg,png,gif,webp}', { encoding: false })
		.pipe(handleError('IMAGES'))
		.pipe(newer('dist/assets/images'))
		.pipe(imagemin([
			svgo({ plugins: [{ name: 'removeViewBox', active: false }] }),
			mozjpeg({ quality: 80, progressive: true }),
			optipng({ optimizationLevel: 3 }),
			gifsicle({ interlaced: true })
		]))
		.pipe(webp())
		.pipe(Gulp.dest('dist/assets/images'))
		.pipe(Gulp.src('src/images/**/*.svg', { encoding: false }))
		.pipe(newer('dist/assets/images'))
		.pipe(Gulp.dest('dist/assets/images'))
		.pipe(gulpIf(isDev, serverInstance.stream()));
}
