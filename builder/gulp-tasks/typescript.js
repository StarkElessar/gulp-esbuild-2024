import * as Gulp from 'gulp';
import { createGulpEsbuild } from 'gulp-esbuild';
import gulpIf from 'gulp-if';

import { handleError } from '../plugins/handle-error.js';

const gulpESBuild = createGulpEsbuild({ incremental: true });

export const typescript = (isDev, serverInstance) => {
	const options = {
		bundle: true,
		outdir: 'js',
		target: ['es2020'],
		sourcemap: isDev,
		minify: !isDev,
		charset: 'utf8',
		metafile: isDev,
		treeShaking: true,
	};

	return Gulp.src('src/scripts/*.ts')
		.pipe(handleError('TypeScript'))
		.pipe(gulpESBuild(options))
		.pipe(Gulp.dest('dist/assets'))
		.pipe(gulpIf(isDev, serverInstance.stream()));
};
