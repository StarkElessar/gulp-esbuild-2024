import { existsSync } from 'node:fs';
import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';

export const cleanBuild = async () => {
	const outDir = resolve('dist');

	if (existsSync(outDir)) {
		await rm(outDir, { recursive: true });
	}
};
