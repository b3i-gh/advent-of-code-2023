// import { input } from './input/test-input';
import { input } from './input/input';

const cards: string[] = input.split('\n');

var total: number = 0;

var reps : number[] = [];

for(var i = 0; i < cards.length; i++){
  if(reps[i] == null)
    reps[i] = 1; 
  var card = cards[i];
  let winningNumbers: number[] = [];
  let playedNumbers: number[] = [];
  
  var cardParts = card.split(':');
  var numbersPart = cardParts[1].split('|');

  let wNs: string[] = numbersPart[0].split(' ');
  wNs.forEach((ns) => {
    if(ns != "")
    winningNumbers.push(parseInt(ns));
  });

  let pNs: string[] = numbersPart[1].split(' ');
  pNs.forEach((ns) => {
    if(ns != "")
    playedNumbers.push(parseInt(ns));
  });

  var matchingNumbers = winningNumbers.filter((mn) =>
    playedNumbers.includes(mn)
  );
  
  let r = 0;
  while(r < reps[i]){
    total++;
    if(matchingNumbers.length > 0){
        for(let won = 1;  won <= matchingNumbers.length; won++){
           reps[i+won] == null ? reps[i+won] = 2 : reps[i+won] ++; 
        } 
    }
    r++;
    // console.log("i:" + i + " r:" + r + " np:" + numbersPart + " matching:" + matchingNumbers.length + " tot:" + total);
  }
}


console.log(total);
