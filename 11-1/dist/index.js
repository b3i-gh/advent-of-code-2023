"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { input } from './input/test-input';
const input_1 = require("./input/input");
const solution = solve(readLines(input_1.input));
console.log(solution);
function readLines(inputFilePath) {
    return input_1.input.replace(/\r\n/g, '\n').split('\n');
}
function solve(inputLines) {
    const image = inputLines.map((n) => n.split(''));
    const emptySpace = getEmptySpace(image);
    const galaxies = findGalaxies(image);
    const part1Distances = getDistances({
        galaxies,
        emptySpace,
        expansionRate: 2,
    });
    const part2Distances = getDistances({
        galaxies,
        emptySpace,
        expansionRate: 1000000,
    });
    return {
        part1: sum(part1Distances),
        part2: sum(part2Distances),
    };
}
function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
function getEmptySpace(image) {
    return {
        rows: image.reduce((acc, row, rowIdx) => {
            if (row.every((n) => n === '.')) {
                acc.add(rowIdx);
            }
            return acc;
        }, new Set()),
        cols: image[0].reduce((acc, _col, colIdx) => {
            if (image.every((row) => row[colIdx] === '.')) {
                acc.add(colIdx);
            }
            return acc;
        }, new Set()),
    };
}
function findGalaxies(image) {
    const galaxies = [];
    for (let y = 0; y < image.length; y++) {
        for (let x = 0; x < image[y].length; x++) {
            if (image[y][x] === '#') {
                galaxies.push({ x, y });
            }
        }
    }
    return galaxies;
}
function getDistances({ galaxies, emptySpace, expansionRate, }) {
    const distances = [];
    for (let i = 0; i < galaxies.length; i++) {
        for (let j = i + 1; j < galaxies.length; j++) {
            distances.push(getDistance(galaxies[i], galaxies[j], emptySpace, expansionRate));
        }
    }
    return distances;
}
function getDistance(a, b, emptySpace, expansionRate) {
    const baseDistance = getBaseDistance(a, b);
    const emptySpaceCount = [
        { emptyIndicesSet: emptySpace.rows, dimension: 'y' },
        { emptyIndicesSet: emptySpace.cols, dimension: 'x' },
    ].reduce((sum, { emptyIndicesSet, dimension }) => sum + countEmptySpaceBetween(a, b, emptyIndicesSet, dimension), 0);
    return baseDistance + emptySpaceCount * (expansionRate - 1);
}
function getBaseDistance(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}
function countEmptySpaceBetween(a, b, emptyIndicesSet, dimension) {
    let count = 0;
    let minIdx = Math.min(a[dimension], b[dimension]);
    let maxIdx = Math.max(a[dimension], b[dimension]);
    for (let idx = minIdx + 1; idx < maxIdx; idx++) {
        if (emptyIndicesSet.has(idx)) {
            count++;
        }
    }
    return count;
}
//# sourceMappingURL=index.js.map