// import { input } from './input/test-input';
import { input } from './input/input';

var splittedInput = input.split("\n");
var directions : string = splittedInput[0];
var map : string[][] = [];
var startingPositions : string[][] = [];
var steps : number[] = [];
decodifyMap(splittedInput);
navigateMap(startingPositions);
var total = lcm(steps);
console.log(total);

function decodifyMap(input : string[]){
    for(let i = 2; i < input.length; i++){
        let a = [];
        a[0] = input[i].split("=")[0].trim();
        a[1] = input[i].split("=")[1].split(",")[0].substring(2);
        a[2] = input[i].split("=")[1].split(",")[1].substring(1,4);
        if(a[0].endsWith("A")) startingPositions.push(a);
        
        map.push(a);
    }
}

function navigateMap(startingPositions : string[][]){
    // let arrived : boolean[] = [];
    // var processComplete = false;
    // var totalSteps = 0;
    var paths : string[][] = [];
    for(let j = 0; j < startingPositions.length; j++){
        let arrived = false;
        let curSteps = 0;
        var path = startingPositions[j];
        while(!arrived){
            let direction = directions.charAt(curSteps % directions.length);
            curSteps++;
            let nextPosition = "";
            if(path == undefined)
                paths = [];
            else if(direction == "L")
                nextPosition = path[1];
            else
                nextPosition =  path[2];
            if(nextPosition.endsWith("Z"))
                arrived = true;
            path = map.find((row) =>row[0] == nextPosition)!;
        }
        steps.push(curSteps);
    }
}

function lcm(arr: number[]): number {
    return arr.reduce((acc, n) => (acc * n) / gcd(acc, n));
  }
  
  function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }




 


// function navigateMap(startingPositions : string[][]){
//     let arrived : boolean[] = [];
//     var processComplete = false;
//     var totalSteps = 0;
//     var paths : string[][] = [];
//     for(let j = 0; j < startingPositions.length; j++){
//         paths.push(startingPositions[j]);
//         arrived.push(false);
//     }

//     while(!processComplete){
//         let direction = directions.charAt(totalSteps % directions.length);
//         totalSteps++;
//         let nextPosition = "";
//         for(let i = 0; i < startingPositions.length; i++){
//             arrived[i] = false;
//             if(paths[i] == undefined)
//                 paths[i]= [];
//             else if(direction == "L")
//                 nextPosition = paths[i][1];
//             else
//                 nextPosition =  paths[i][2];
//             if(nextPosition.endsWith("Z"))
//                 arrived[i] = true;
//             paths[i] = map.find((row) =>row[0] == nextPosition)!;
//         }
//         if(arrived.findIndex((a) => a == false) == -1)
//             processComplete = true;
//     }
//     console.log(totalSteps);
// }