import * as Gulp from 'gulp';
import { handleError } from '../plugins/handle-error.js';

export const copyFonts = () => {
	return Gulp.src('src/fonts/*.woff2', { allowEmpty: true })
		.pipe(handleError('FONTS [copy-fonts]'))
		.pipe(Gulp.dest('dist/assets/fonts'));
}
