import * as fs from 'fs';

// const input : string  = fs.readFileSync('./test-input.txt', 'utf-8');
const input = fs.readFileSync('./test-input.txt', 'utf-8');

// get della lunghezza della riga (x = es 10)
const rowLenght = input.indexOf('\n');
console.log(rowLenght);

// trasfrormo in un'unica riga (rimuovo \n)
const oneLiner = input.replaceAll('\n', '');
console.log(oneLiner);

var currNumber: string = '';
var currParsedNumber : number = 0;
var edges: number[] = [-1, -1];

var total = 0;

var logger: string;

for (var i = 0; i < oneLiner.length; i++) {
  logger = 'i:' + i;

  var currChar: string = oneLiner.charAt(i);
  logger += ' currChar:' + currChar;
  var prevChar: string = '';
  if (i > 0) {
    prevChar = oneLiner.charAt(i - 1);
    logger += ' prevChar:' + prevChar;
  }
  if (currChar.match('\d')) {
    currNumber += currChar;
    logger += ' currNumber:' + currNumber;
    if (!prevChar.match('\d')) {
      edges[0] = i;
    }
  } else if (prevChar.match('\d')) {
    edges[1] = i - 1;
    let neibourghs: string = oneLiner.charAt(edges[0] - 1);
    neibourghs += oneLiner.charAt(edges[1] + 1);
    neibourghs += oneLiner.charAt(edges[1] + 1);
    neibourghs += oneLiner.charAt(edges[0] - (rowLenght - 1));
    neibourghs += oneLiner.charAt(edges[0] - rowLenght);
    neibourghs += oneLiner.charAt(edges[0] - (rowLenght + 1));
    neibourghs += oneLiner.charAt(edges[0] + (rowLenght - 1));
    neibourghs += oneLiner.charAt(edges[0] + rowLenght);
    neibourghs += oneLiner.charAt(edges[0] + (rowLenght + 1));
    neibourghs += oneLiner.charAt(edges[1] + (rowLenght - 1));
    neibourghs += oneLiner.charAt(edges[1] - rowLenght);
    neibourghs += oneLiner.charAt(edges[1] - (rowLenght + 1));
    neibourghs += oneLiner.charAt(edges[1] - (rowLenght - 1));
    neibourghs += oneLiner.charAt(edges[1] + rowLenght);
    neibourghs += oneLiner.charAt(edges[1] + (rowLenght + 1));

    logger += ' neibourghs:' + neibourghs;
    if (neibourghs.match('[^\d.]')) {
      currParsedNumber = parseInt(currNumber);
      total += currParsedNumber;
      logger += ' currParsedNumber:' + currParsedNumber;
      logger += ' partialTotal:' + total;
      logger += ' edges[0]:' + edges[0];
      logger += ' edges[1]:' + edges[1];
    }
    currNumber = '';
    currParsedNumber = 0;
    edges = [-1, -1];
  }

  console.log(logger);
}

console.log('Total: ' + total);
