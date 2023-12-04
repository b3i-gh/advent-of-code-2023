"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { input } from './input/test-input';
const input_1 = require("./input/input");
const cards = input_1.input.split('\n');
var total = 0;
var reps = [];
for (var i = 0; i < cards.length; i++) {
    if (reps[i] == null)
        reps[i] = 1;
    var card = cards[i];
    let winningNumbers = [];
    let playedNumbers = [];
    var cardParts = card.split(':');
    var numbersPart = cardParts[1].split('|');
    let wNs = numbersPart[0].split(' ');
    wNs.forEach((ns) => {
        if (ns != "")
            winningNumbers.push(parseInt(ns));
    });
    let pNs = numbersPart[1].split(' ');
    pNs.forEach((ns) => {
        if (ns != "")
            playedNumbers.push(parseInt(ns));
    });
    var matchingNumbers = winningNumbers.filter((mn) => playedNumbers.includes(mn));
    let r = 0;
    while (r < reps[i]) {
        total++;
        if (matchingNumbers.length > 0) {
            for (let won = 1; won <= matchingNumbers.length; won++) {
                reps[i + won] == null ? reps[i + won] = 2 : reps[i + won]++;
            }
        }
        r++;
        // console.log("i:" + i + " r:" + r + " np:" + numbersPart + " matching:" + matchingNumbers.length + " tot:" + total);
    }
}
console.log(total);
//# sourceMappingURL=index.js.map