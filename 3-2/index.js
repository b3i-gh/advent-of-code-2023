"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _3_1 = require("./input/3");
var numbers = [];
var symbols = [];
var gears = [];
var lines = _3_1.input.split('\n');
var _loop_1 = function (i, line) {
    // Extract the positions of all symbols (i.e. characters that are not digits and not the dot)
    Array.from(line.matchAll(/[^0-9|.]/g)).forEach(function (match) {
        return symbols.push({
            line: i,
            index: match.index
        });
    });
    // Extract the positions (start and end) and values of all numbers
    Array.from(line.matchAll(/[0-9]+/g)).forEach(function (match) {
        return numbers.push({
            line: i,
            start: match.index,
            end: match.index + match[0].length - 1,
            number: parseInt(match[0])
        });
    });
    Array.from(line.matchAll(/\*/g)).forEach(function (match) {
        return gears.push({
            line: i,
            index: match.index
        });
    });
};
for (var _i = 0, _a = lines.entries(); _i < _a.length; _i++) {
    var _b = _a[_i], i = _b[0], line = _b[1];
    _loop_1(i, line);
}
/**
 * Checks whether or not a symbol is nearby a number.
 * This is true for the following fields:
 *
 * ┌───┬───┬───┬───┬───┐
 * │ x │ x │ x │ x │ x │
 * ├───┼───┼───┼───┼───┤
 * │ x │ 1 │ 2 │ 3 │ x │
 * ├───┼───┼───┼───┼───┤
 * │ x │ x │ x │ x │ x │
 * └───┴───┴───┴───┴───┘
 *
 * This means that the symbol has to be in
 * - either the same line or an adjacent line, and
 * - between (start - 1) and (end + 1).
 *
 * @param number - number to check
 * @param symbol - symbol to check
 * @returns whether or not the symbol is adjacent to the number
 */
var isNearby = function (number, symbol) {
    return symbol.line <= number.line + 1 &&
        symbol.line >= number.line - 1 &&
        symbol.index >= number.start - 1 &&
        symbol.index <= number.end + 1;
};
// For part 1, all numbers with an adjacent symbol are valid numbers.
var validNumbers = numbers.filter(function (number) {
    return symbols.some(function (symbol) { return isNearby(number, symbol); });
});
// For part 2, all gear symbols are valid that have exactly two adjacent number.
var validGears = gears
    .map(function (gear) {
    var matchingNumbers = numbers.filter(function (number) { return isNearby(number, gear); });
    return {
        isValid: matchingNumbers.length === 2,
        // the gear ratio is the product of the matching numbers
        gearRatio: matchingNumbers.reduce(function (acc, number) { return (acc === 0 ? number.number : acc * number.number); }, 0)
    };
})
    .filter(function (gear) { return gear.isValid; });
console.log('Part 1: ', validNumbers.reduce(function (acc, number) { return number.number + acc; }, 0));
console.log('Part 2: ', validGears.reduce(function (acc, gear) { return acc + gear.gearRatio; }, 0));
