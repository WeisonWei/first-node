'use strict';

let url = require('src/http/url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));