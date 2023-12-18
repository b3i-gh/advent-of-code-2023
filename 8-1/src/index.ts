// import { input } from './input/test-input';
import { input } from './input/input';

var splittedInput = input.split("\n");
var directions : string = splittedInput[0];
var map : string[][] = [];
console.log(directions);
decodifyMap(splittedInput);
var totalSteps = 0;
navigateMap();
function decodifyMap(input : string[]){
    for(let i = 2; i < input.length; i++){
        let a = [];
        a[0] = input[i].split("=")[0].trim();
        a[1] = input[i].split("=")[1].split(",")[0].substring(2);
        a[2] = input[i].split("=")[1].split(",")[1].substring(1,4);
        console.log(a.toString());
        map.push(a);
    }
}

function navigateMap(){
    let currentPosition = "AAA";
    let endingPosition = "ZZZ";
    let arrived = false;

    while(!arrived){
        let currRow = map.find((row) =>row[0] == currentPosition);
        console.log(currentPosition);
        if(currRow == undefined)
            currRow = [];
        let direction = directions.charAt(totalSteps % directions.length);
        if(direction == "L")
            currentPosition = currRow[1];
        else
            currentPosition =  currRow[2];
        console.log("steps:" +totalSteps + " direction:" + direction + " nextPos:" + currentPosition + " currRow:" + currRow);
        totalSteps++;
        if(currentPosition == endingPosition)
            arrived = true;
    }
}

console.log(totalSteps);

