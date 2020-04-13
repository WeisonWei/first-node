'use strict';

const fs = require('fs');

let dataFirst = 'Hello, Node.js';
fs.writeFile('../resource/write.txt', dataFirst, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});

let dataSecond = 'I am Java';
fs.writeFileSync('../resource/write.txt', dataSecond);

//statSync()
fs.stat('../resource/write.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});