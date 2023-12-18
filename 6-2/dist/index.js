"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { input } from './input/test-input';
const input_1 = require("./input/input");
var splittedInput = input_1.input.split("\n");
var time = decodifyRow(splittedInput[0]);
var distance = decodifyRow(splittedInput[1]);
var winningCombinations = [];
var total = 1;
// for(let i = 0; i < times.length; i++){
let wc = 0;
for (let t = 1; t < time; t++) {
    let d = t * (time - t);
    if (d > distance) {
        wc++;
        // console.log("current record =" + distance + " t=" + t + " d:" + d);
    }
}
total *= wc;
// console.log(" wc:" + wc + " total:" + total);
// }
console.log("total: " + total);
function decodifyRow(row) {
    let sRow = row.split(":");
    sRow[1] = sRow[1].replace(/\s/g, "");
    // console.log(sRow[1]);
    /*
    for(let i = 0; i < sRow.length; i++){
        if(!isNaN(parseInt(sRow[i])))
            result.push(parseInt(sRow[i]));
    }
    console.log(result);
    return result;
    */
    return parseInt(sRow[1]);
}
//# sourceMappingURL=index.js.map