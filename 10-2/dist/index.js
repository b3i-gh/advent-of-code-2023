"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { input } from './input/test-input';
const input_1 = require("./input/input");
console.log(input_1.input);
var steps = 0;
var nextPos = -1;
var prevPosition = -1;
var currPosition = -1;
const inputRowLength = input_1.input.indexOf("\n");
const startingPos = findStartingPosition(input_1.input);
console.log("Starting pos: " + startingPos);
findSecondPosition(startingPos);
while (currPosition != startingPos)
    getNextPosition();
console.log("total steps:" + steps / 2);
// in base alla direzione determina nodo successivo
// vai al nodo successivo (step++)
// finché non torno al punto di partenza (o coordinate o S)
function findStartingPosition(input) {
    return input.indexOf("S");
}
function findSecondPosition(startingPos) {
    let scan = scanNorth(startingPos);
    if (scan != "|" && scan != "F" && scan != "7") {
        scan = scanEast(startingPos);
        if (scan != "-" && scan != "J" && scan != "7") {
            scan = scanSouth(startingPos);
            if (scan != "|" && scan != "J" && scan != "L")
                scan = scanWest(startingPos);
        }
    }
    steps++;
    prevPosition = startingPos;
}
function scanNorth(currPos) {
    currPosition = currPos - inputRowLength - 1;
    return input_1.input.charAt(currPos - inputRowLength - 1);
}
function scanEast(currPos) {
    currPosition = currPos + 1;
    return input_1.input.charAt(currPos + 1);
}
function scanSouth(currPos) {
    currPosition = currPos - inputRowLength + 1;
    return input_1.input.charAt(currPos + inputRowLength + 1);
}
function scanWest(currPos) {
    currPosition = currPos - 1;
    return input_1.input.charAt(currPos - 1);
}
function getNextPosition() {
    let currChar = input_1.input.charAt(currPosition);
    console.log("steps:" + steps + " prevPos:" + prevPosition + " currPos:" + currPosition + "(" + currChar + ")");
    if (currChar != "S") {
        switch (currChar) {
            case "|":
                if (currPosition - (inputRowLength + 1) == prevPosition)
                    setNextPosition("S");
                else
                    setNextPosition("N");
                break;
            case "-":
                if (currPosition - 1 == prevPosition)
                    setNextPosition("E");
                else
                    setNextPosition("W");
                break;
            case "L":
                if (currPosition - (inputRowLength + 1) == prevPosition)
                    setNextPosition("E");
                else
                    setNextPosition("N");
                break;
            case "J":
                if (currPosition - (inputRowLength + 1) == prevPosition)
                    setNextPosition("W");
                else
                    setNextPosition("N");
                break;
            case "7":
                if (currPosition - 1 == prevPosition)
                    setNextPosition("S");
                else
                    setNextPosition("W");
                break;
            case "F":
                if (currPosition + 1 == prevPosition)
                    setNextPosition("S");
                else
                    setNextPosition("E");
                break;
        }
        steps++;
    }
}
function setNextPosition(direction) {
    prevPosition = currPosition;
    switch (direction) {
        case "N":
            currPosition -= inputRowLength + 1;
            break;
        case "E":
            currPosition++;
            break;
        case "S":
            currPosition += inputRowLength + 1;
            break;
        case "W":
            currPosition--;
            break;
    }
}
//# sourceMappingURL=index.js.map