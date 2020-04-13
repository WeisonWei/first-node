'use strict';

// 引入hello模块:
const greet = require('./hello');
const regards = require("./hello").regards

console.log(regards)

//const {regards} = require("./hello");
const name = 'Michael'
greet(name); // Hello, Michael!


