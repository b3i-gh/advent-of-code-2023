// import { input } from './input/test-input';
import { input } from './input/input';

const cards: string[] = input.split('\n');

var total: number = 0;

console.log(input.toString());

cards.forEach((card) => {
  let winningNumbers: number[] = [];
  let playedNumbers: number[] = [];
  
  var cardParts = card.split(':');
  // console.log("cardParts[1]: " + cardParts[1]);
  var numbersPart = cardParts[1].split('|');
  // console.log(numbersPart);

    let wNs: string[] = numbersPart[0].split(' ');
    // console.log(wNs);
    wNs.forEach((ns) => {
      if(ns != "")
      winningNumbers.push(parseInt(ns));
    });
    console.log(winningNumbers)

    let pNs: string[] = numbersPart[1].split(' ');
    pNs.forEach((ns) => {
      if(ns != "")
      playedNumbers.push(parseInt(ns));
    });
    console.log(playedNumbers)

    var matchingNumbers = winningNumbers.filter((mn) =>
      playedNumbers.includes(mn)
    );
    console.log(matchingNumbers);
    let currentCardValue = matchingNumbers.length == 0 ? 0 : Math.pow(2, matchingNumbers.length - 1);
    console.log("currentCardValue:" + currentCardValue);
    total += currentCardValue;
});

console.log(total);
