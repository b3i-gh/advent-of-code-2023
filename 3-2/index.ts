import * as fs from 'fs';

// const input : string  = fs.readFileSync('./test-input.txt', 'utf-8');
const input = fs.readFileSync('./test-input.txt', 'utf-8');

// get della lunghezza della riga (x = es 10)
const rowLenght = input.indexOf('\n');

const solution3 = (input: string[]) => {
  const symbols = ['*'];
  const reg = /\d+/g;

  // Collect gear coordinates and adjacent positions
  const gearCoords: Array<Array<[number, number]>> = [];
  symbols.forEach(symbol => {
    input.forEach((row, i) => {
      row.split('').forEach((char, j) => {
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
  const numbers = input.flatMap((row, i) => {
    return [...row.matchAll(reg)].map(match => {
      const start = match.index ?? 0;
      const wordCoords = Array.from({ length: match[0].length }, (_, j) => [i, start + j]);
      return { coords: wordCoords, val: +match[0] };
    });
  });

  // Calculate value based on numbers adjacent to gears
  let val = 0;
  gearCoords.forEach(gear => {
    const adjacentNumbers = numbers.filter(({ coords }) =>
      gear.some(gearCoord => coords.some(coord => coord[0] === gearCoord[0] && coord[1] === gearCoord[1]))
    );

    if (adjacentNumbers.length > 1) {
      val += adjacentNumbers.reduce((acc, { val }) => acc * val, 1);
    }
  });

  return val;
};