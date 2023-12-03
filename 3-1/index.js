"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// const input : string  = fs.readFileSync('./test-input.txt', 'utf-8');
var input = fs.readFileSync('./test-input.txt', 'utf-8');
//const inputArray = input.split('\r\n');
// get della lunghezza della riga (x = es 10)
var rowLenght = input.indexOf('\n');
console.log(rowLenght);
// trasfrormo in un'unica riga (rimuovo \n)
var oneLiner = input.replaceAll('\n', '');
console.log(oneLiner);
var currNumber = "";
var edges = [-1, -1];
var total = 0;
var logger;
for (var i = 0; i < oneLiner.length; i++) {
    logger = "i:" + i;
    var currChar = oneLiner.charAt(i);
    logger += " currChar:" + currChar;
    var prevChar = "";
    if (i > 0) {
        prevChar = oneLiner.charAt(i - 1);
        logger += " prevChar:" + prevChar;
    }
    if (currChar.match("\d")) {
        currNumber += currChar;
        logger += " currNumber:" + currNumber;
        if (!prevChar.match("\d")) {
            edges[0] = i;
            logger += " edges[0]:" + i;
        }
    }
    else if (prevChar.match("\d")) {
        edges[1] = i - 1;
        logger += " edges[1]:" + (i - 1);
        if (input.charAt(edges[0] - 1).match("[^\d.]")
            || input.charAt(edges[1] + 1).match("[^\d.]")
            || input.charAt(edges[0] - (rowLenght - 1)).match("[^\d.]")
            || input.charAt(edges[0] - rowLenght).match("[^\d.]")
            || input.charAt(edges[0] - (rowLenght + 1)).match("[^\d.]")
            || input.charAt(edges[1] + (rowLenght - 1)).match("[^\d.]")
            || input.charAt(edges[1] + rowLenght).match("[^\d.]")
            || input.charAt(edges[1] + (rowLenght + 1)).match("[^\d.]")) {
            var currParsedNumber = parseInt(currNumber);
            total += currParsedNumber;
            logger += " currParsedNumber:" + currParsedNumber;
            logger += " partialTotal:" + total;
        }
        currNumber = "";
        edges = [-1, -1];
        console.log(logger);
    }
}
console.log("Total: " + total);
// inizializzo il numero con indice di inizio e inidice di fine edges[i]
