"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_input_1 = require("./input/test-input");
var cards = test_input_1.input.split("\n");
var total = 0;
console.log(test_input_1.input.toString());
cards.forEach(function (card) {
    var winningNumbers = [];
    var playedNumbers = [];
    //let matchingNumbers : number = 0;
    var cardParts = card.split(":");
    var numbersPart = cardParts[1].split("|");
    var wNs = numbersPart[0].split(" ");
    wNs.forEach(function (ns) {
        winningNumbers.push(parseInt(ns));
    });
    var pNs = numbersPart[1].split(" ");
    pNs.forEach(function (ns) {
        playedNumbers.push(parseInt(ns));
    });
    var matchingNumbers = winningNumbers.filter(function (mn) { return playedNumbers.includes(mn); });
    total += Math.pow(2, (matchingNumbers.length) - 1);
});
console.log(total);
