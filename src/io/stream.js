'use strict';

const fs = require('fs');

// 打开一个流:
let rs = fs.createReadStream('../resource/read.txt', 'utf-8');

// pipe
let ws = fs.createWriteStream('../resource/write.txt');

//流默认读写完毕自动关闭 不希望自动关闭Writable流进行如下设置
//readable.pipe(writable, { end: false });
//将read中的内容复制到了write
rs.pipe(ws);

rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});



