import { existsSync, rmSync } from 'node:fs';
import { Plugin } from "esbuild";

export const clearFolder: Plugin = {
	name: 'clear-folder',
	setup: (build) => {
		build.onStart(() => {
			const { outdir } = build.initialOptions;

			if (outdir && existsSync(outdir)) {
				rmSync(outdir, { recursive: true });
			}
		});
	}
};
