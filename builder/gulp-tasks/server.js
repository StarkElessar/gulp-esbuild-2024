import { resolve } from 'node:path';

export const server = (instance) => {
	instance.init({
		server: {
			baseDir: resolve('dist'),
		},
		logLevel: 'info',
		cors: true,
		notify: true,
		open: false,
		reloadOnRestart: true,
		port: process.env.PORT ?? 3000,
	});
};
