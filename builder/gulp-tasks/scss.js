import * as Gulp from 'gulp';
import gulpIf from 'gulp-if';
import { createGulpEsbuild } from 'gulp-esbuild';
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import postcssSortMediaQueries from 'postcss-sort-media-queries';

import { handleError } from '../plugins/handle-error.js';

const gulpESBuild = createGulpEsbuild({ incremental: true });

export const scss = (isDev, serverInstance) => {
	const options = {
		bundle: true,
		outdir: 'css',
		sourcemap: isDev,
		minify: !isDev,
		charset: 'utf8',
		metafile: isDev,
		plugins: [
			sassPlugin({
				async transform(source) {
					const { css } = await postcss([
						autoprefixer,
						postcssSortMediaQueries({ sort: 'desktop-first' })
					]).process(source, {
						from: undefined
					});
					return css;
				},
			}),
			{
				name: 'ignore-assets',
				setup(build) {
					build.onResolve({ filter: /\.(svg|png|jpe?g|gif|woff|woff2)$/ }, (args) => {
						return {
							path: args.path,
							external: true
						};
					});
				},
			},
		],
	};

	return Gulp.src('src/styles/*.scss')
		.pipe(handleError('SCSS'))
		.pipe(gulpESBuild(options))
		.pipe(Gulp.dest('dist/assets'))
		.pipe(gulpIf(isDev, serverInstance.stream()));
}
