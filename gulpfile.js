var gulp = require('gulp'),
    sizeImage = require('./sizeImage');

//config sourceImage foloder
var config =  {
    sourceImageFolder: 'sourceImage/*',
    destImageFolder: 'destImage',
    size: [400, 400],
    isExpand: false,
};

gulp.task('sizeimage', function() {
    return gulp.src(config.sourceImageFolder)
        .pipe(sizeImage(config.isExpand, config.size))
        .pipe(gulp.dest(config.destImageFolder));
});

gulp.task('default', ['sizeimage']);
