"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// const input : string  = fs.readFileSync('./test-input.txt', 'utf-8');
var input = fs.readFileSync('./input.txt', 'utf-8');
var inputArray = input.split('\r\n');
inputArray.pop();
var part1 = 0;
for (var i in inputArray) {
    var red = Math.max.apply(Math, inputArray[i].match(/(\d+)\s+red/g).map(function (elm) { return parseInt(elm.match(/\d+/)[0], 10); }));
    var green = Math.max.apply(Math, inputArray[i].match(/(\d+)\s+green/g).map(function (elm) { return parseInt(elm.match(/\d+/)[0], 10); }));
    var blue = Math.max.apply(Math, inputArray[i].match(/(\d+)\s+blue/g).map(function (elm) { return parseInt(elm.match(/\d+/)[0], 10); }));
    if (red <= 12 && green <= 13 && blue <= 14)
        part1 += parseInt(i) + 1;
}
console.log(part1);
