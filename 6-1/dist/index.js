"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { input } from './input/test-input';
const input_1 = require("./input/input");
var splittedInput = input_1.input.split("\n");
var times = decodifyRow(splittedInput[0]);
var distances = decodifyRow(splittedInput[1]);
var winningCombinations = [];
var total = 1;
for (let i = 0; i < times.length; i++) {
    let wc = 0;
    for (let t = 1; t < times[i]; t++) {
        let d = t * (times[i] - t);
        if (d > distances[i]) {
            wc++;
            console.log("current record =" + distances[i] + " t=" + t + " d:" + d);
        }
    }
    total *= wc;
    console.log(" wc:" + wc + " total:" + total);
}
console.log("total: " + total);
function decodifyRow(row) {
    let result = [];
    let sRow = row.split(" ");
    for (let i = 0; i < sRow.length; i++) {
        if (!isNaN(parseInt(sRow[i])))
            result.push(parseInt(sRow[i]));
    }
    console.log(result);
    return result;
}
//# sourceMappingURL=index.js.map