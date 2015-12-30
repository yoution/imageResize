var through = require('through2');
var gm = require('gm').subClass({imageMagick: true});


function SizeImage(isNeedExpand, size) {
    var doSizeFn;
    if (!isNeedExpand) {
        doSizeFn = 'resize';
    }else {
        doSizeFn = 'resizeExact';
    }

    if (!size) {
        size = [200, 200]; 
    }
    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {
            return cb(null, file);
        }
        gm(file._contents)
            [doSizeFn](size[0],size[1])
            .toBuffer(function (err, db) {
                if (err)  throw "SizeImage toBuffer Error";
                file.contents = Buffer.concat([db]);
                cb(null, file);
            });
    });
}

module.exports = SizeImage;
