import ESBuild from 'esbuild';
import chalk from 'chalk';
import { getESBuildConfig } from './get-esbuild-config';

const init = async (isDev: boolean) => {
	const config = getESBuildConfig(isDev);

	try {
		if (isDev) {
			const context = await ESBuild.context(config);

			await context.watch();
			console.log(chalk.green('⚡️ Build complete! ⚡️\nОтслеживание успешно включено!'));
		} else {
			await ESBuild.build(config);
			console.log(chalk.green('⚡️ Build complete! ⚡️'));
		}
	} catch {
		console.log(chalk.red('Что то пошло не так.. 🤔'));
		process.exit(1);
	}
};

await init(process.argv.includes('--development'));
