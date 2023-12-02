import * as fs from 'fs';

// const input : string  = fs.readFileSync('./test-input.txt', 'utf-8');
const input : string  = fs.readFileSync('./input.txt', 'utf-8');

const inputArray = input.split('\r\n');
inputArray.pop();

let part1 = 0;

for (let i in inputArray) {
  const red = Math.max(...inputArray[i].match(/(\d+)\s+red/g).map(elm => parseInt(elm.match(/\d+/)[0], 10)))
  const green = Math.max(...inputArray[i].match(/(\d+)\s+green/g).map(elm => parseInt(elm.match(/\d+/)[0], 10)))
  const blue = Math.max(...inputArray[i].match(/(\d+)\s+blue/g).map(elm => parseInt(elm.match(/\d+/)[0], 10)))

  if (red <= 12 && green <= 13 && blue <= 14) part1 += parseInt(i) + 1  
}

console.log(part1)