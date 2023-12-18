// import { input } from './input/test-input';
// import { input } from './input/test-input2';
import { input } from './input/input';

var total = 0;

var spilttedInput = input.split('\n');

spilttedInput.forEach((row) => {
  var rowValues: number[] = [];
  row.split(' ').forEach((s) => rowValues.push(parseInt(s)));
  console.log(row.toString());
  var rowHistory: number[][] = [];
  rowHistory.push(rowValues);
  let processComplete = true;
  recBuildHistory(rowHistory);
  rowHistory[rowHistory.length - 1].push(0);
  calculateNext(rowHistory);
});

console.log('Total:' + total);
 
function recBuildHistory(history: number[][]) {
  let currRow: number[] = history[history.length - 1];
  let rowCompleted = true;
  let diffs: number[] = [];
  for (let i = 0; i < currRow.length - 1; i++) {
    let n = currRow[i + 1] - currRow[i];
    diffs.push(n);
    if (n != 0) rowCompleted = false;
  }
  console.log(diffs.toString());
  history.push(diffs);
  if (!rowCompleted) recBuildHistory(history);
}

function calculateNext(history: number[][]) {
  let rowCompleted = true;
  for (let i = history.length - 1; i > 0; i--) {
    let currRow = history[i];
    let prevRow = history[i - 1];
    let rowNumber = currRow[currRow.length - 1];
    let upRowNumber = prevRow[prevRow.length - 1];
    let nextNumber = rowNumber + upRowNumber;
    history[i - 1].push(nextNumber);
    if (i == 1) total += nextNumber;
    console.log(
      'i:' + i + ' curr ' + currRow + ' prev ' + prevRow + ' next:' + nextNumber + ' total:' + total);
  }
}