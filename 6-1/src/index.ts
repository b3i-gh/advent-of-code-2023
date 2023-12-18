// import { input } from './input/test-input';
import { input } from './input/input';

var splittedInput = input.split("\n");
var times : number[] = decodifyRow(splittedInput[0]);
var distances : number[] = decodifyRow(splittedInput[1]);
var winningCombinations : number[] = [];
var total : number = 1;

for(let i = 0; i < times.length; i++){
    let wc = 0;
    for(let t = 1; t < times[i]; t++){
        let d = t * (times[i]-t);
        if(d > distances[i]){
            wc++;
            console.log("current record =" + distances[i] + " t=" + t + " d:" + d);
       }
    }
    total *= wc;
    console.log(" wc:" + wc + " total:" + total);
}

console.log("total: " + total);

function decodifyRow(row : string){
    let result : number[] = [];
    let sRow = row.split(" ");
    for(let i = 0; i < sRow.length; i++){
        if(!isNaN(parseInt(sRow[i])))
            result.push(parseInt(sRow[i]));
    }
    console.log(result);
    return result;
}


