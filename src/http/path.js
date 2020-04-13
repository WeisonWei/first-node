'use strict';

let path = require('src/http/path');

// 解析当前目录:
let workDir = path.resolve('.'); // '/Users/michael'

// 组合完整的文件路径:当前目录+'pub'+'index.html':
let filePath = path.join(workDir, 'resource', 'read.txt');
// '/Users/michael/pub/index.html'
console.log("filePath:" + filePath)