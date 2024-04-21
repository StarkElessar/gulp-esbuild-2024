import * as Gulp from 'gulp';
import browserSync from 'browser-sync';
import { cleanBuild, pug, server, fontStyle, copyFonts, images } from './builder/gulp-tasks/index.js';

const isDev = process.argv.includes('--development');
const browserSyncInstance = browserSync.create();

const serverHandle = server.bind(null, browserSyncInstance);
const pugHandle = pug.bind(null, isDev, browserSyncInstance);
const imagesHandle = images.bind(null, isDev, browserSyncInstance);

function watcher() {
	Gulp.watch('src/views/**/*.pug', pugHandle);
	Gulp.watch('src/images/**/*.{jpg,jpeg,png,svg,gif,webp,ico}', imagesHandle);
	Gulp.watch('src/scripts/**/*.ts').on('change', browserSyncInstance.reload);
	Gulp.watch('src/styles/**/*.scss').on('change', browserSyncInstance.reload);
}

const mainTasks = Gulp.parallel(copyFonts, pugHandle, imagesHandle);

Gulp.task('build', Gulp.series(cleanBuild, fontStyle, mainTasks));

Gulp.task('default', Gulp.series(cleanBuild, fontStyle, mainTasks, Gulp.parallel(watcher, serverHandle)));
