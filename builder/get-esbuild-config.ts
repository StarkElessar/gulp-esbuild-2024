import { resolve } from 'node:path';
import { sassPlugin } from 'esbuild-sass-plugin';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import postcssSortMediaQueries from 'postcss-sort-media-queries';
import { BuildOptions } from 'esbuild';

import { ignoreAssets } from './plugins/ignore-assets';

export const getESBuildConfig = (isDev: boolean): BuildOptions => {
	return {
		outdir: resolve('dist/assets'),
		entryPoints: [
			resolve('src/scripts/*.ts'),
			resolve('src/styles/*.scss'),
		],
		bundle: true,
		minify: !isDev,
		tsconfig: resolve('tsconfig.json'),
		charset: 'utf8',
		metafile: isDev,
		sourcemap: isDev,
		plugins: [
			ignoreAssets,
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
		],
		assetNames: 'assets/[name]-[hash]',
		chunkNames: 'chunks/[name]-[hash]',
		format: 'esm',
		splitting: true,
	};
};
