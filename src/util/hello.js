'use strict';

console.log('Hello, world.');

const regards = 'Hello';

function greet(name) {
    console.log(regards + ', ' + name + '!');
}

//module.exports = greet;
module.exports = {
    greet: this.greet,
    regards: "regards"
};