import { Plugin } from 'esbuild';

export const ignoreAssets: Plugin = {
	name: 'ignore-assets',
	setup(build) {
		build.onResolve({ filter: /\.(svg|png|jpe?g|gif|woff|woff2)$/ }, (args) => {
			return {
				path: args.path,
				external: true
			};
		});
	},
};
