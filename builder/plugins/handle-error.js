import gulpPlumber from 'gulp-plumber';
import gulpNotify from 'gulp-notify';

export const handleError = (taskName) => {
	return gulpPlumber({
		handleError: gulpNotify.onError({
			title: taskName,
			message: 'Error: <%= error.message %>',
		})
	});
};
