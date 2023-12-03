"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// const input : string  = fs.readFileSync('./test-input.txt', 'utf-8');
var input = fs.readFileSync('./test-input.txt', 'utf-8');
// get della lunghezza della riga (x = es 10)
var rowLenght = input.indexOf('\n');
var solution3 = function (input) {
    var symbols = ['*'];
    var reg = /\d+/g;
    // Collect gear coordinates and adjacent positions
    var gearCoords = [];
    symbols.forEach(function (symbol) {
        input.forEach(function (row, i) {
            row.split('').forEach(function (char, j) {
                if (char === symbol) {
                    gearCoords.push([
                        [i - 1, j],
                        [i + 1, j],
                        [i, j - 1],
                        [i, j + 1],
                        [i - 1, j - 1],
                        [i - 1, j + 1],
                        [i + 1, j - 1],
                        [i + 1, j + 1],
                    ]);
                }
            });
        });
    });
    // Collect coordinates and values of numbers
    var numbers = input.flatMap(function (row, i) {
        return __spreadArray([], row.matchAll(reg), true).map(function (match) {
            var _a;
            var start = (_a = match.index) !== null && _a !== void 0 ? _a : 0;
            var wordCoords = Array.from({ length: match[0].length }, function (_, j) { return [i, start + j]; });
            return { coords: wordCoords, val: +match[0] };
        });
    });
    // Calculate value based on numbers adjacent to gears
    var val = 0;
    gearCoords.forEach(function (gear) {
        var adjacentNumbers = numbers.filter(function (_a) {
            var coords = _a.coords;
            return gear.some(function (gearCoord) { return coords.some(function (coord) { return coord[0] === gearCoord[0] && coord[1] === gearCoord[1]; }); });
        });
        if (adjacentNumbers.length > 1) {
            val += adjacentNumbers.reduce(function (acc, _a) {
                var val = _a.val;
                return acc * val;
            }, 1);
        }
    });
    return val;
};
