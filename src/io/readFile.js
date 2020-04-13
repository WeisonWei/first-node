'use strict';

const fs = require('fs');

fs.readFile('../resource/read.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

let data = fs.readFileSync('../resource/read.txt', 'utf-8');

fs.readFile('../resource/1377.png', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        // Buffer -> String
        let text = data.toString('utf-8');
        console.log(text);
        // String -> Buffer
        let buf = Buffer.from(text, 'utf-8');
        console.log(buf);
    }
});
console.log(data);