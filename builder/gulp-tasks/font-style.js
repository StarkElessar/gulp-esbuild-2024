import { appendFile, existsSync } from 'node:fs';
import { readdir, writeFile } from 'node:fs/promises';
import { resolve, parse } from 'node:path';

const fontFacesFile = resolve('src/styles/config/font-faces.scss');

const italicRegex = /italic/i;
const cleanSeparator = /(?:_|__|-|\s)?(italic)/i;

const fontWeights = {
	thin: 100,
	hairline: 100,
	extralight: 200,
	ultralight: 200,
	light: 300,
	regular: 400,
	medium: 500,
	semibold: 600,
	demibold: 600,
	bold: 700,
	extrabold: 800,
	ultrabold: 800,
	black: 900,
	heavy: 900,
	extrablack: 950,
	ultrablack: 950
};

const fontFaceTemplate = (name, file, weight, style) => `@font-face {
	font-family: ${name};
	font-display: swap;
	src: url("/assets/fonts/${file}.woff2") format("woff2");
	font-weight: ${weight};
	font-style: ${style};
}\n`;

export const fontStyle = async () => {
	try {
		if (existsSync(fontFacesFile)) {
			console.info('Файл scss/config/fonts.scss уже существует.\nДля обновления файла его нужно удалить!');
			return;
		}

		const fontFiles = await readdir('src/fonts');

		if (!fontFiles.length) {
			console.error('Нет сконвертированных шрифтов');
			return;
		}

		await writeFile(fontFacesFile, '');
		let newFileOnly;

		for (const file of fontFiles) {
			const { name } = parse(file);

			if (newFileOnly !== name) {
				const [fontName, weight = 'regular'] = name.split('-');
				const weightString = fontWeights[weight.replace(cleanSeparator, '').toLowerCase()];
				const fontStyle = italicRegex.test(name) ? 'italic' : 'normal';

				await appendFile(fontFacesFile, fontFaceTemplate(fontName, name, weightString, fontStyle), (err) => {
					if (err) {
						console.error('appendFile Error', err);
					}
				});
				newFileOnly = name;
			}
		}
	}
	catch (error) {
		console.error('Ошибка при обработке шрифтов:\n', error);
	}
};
