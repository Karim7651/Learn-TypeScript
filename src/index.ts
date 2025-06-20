import { MatchResult } from './MatchResults';
import { MatchReader } from './MatchReader';
const reader = new MatchReader('football.csv');
reader.read()
let manUnitedWins = 0;
//eiter manunited was home & home won or manunited was away and away won
for (let match of reader.data) {
  if (
    (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] == MatchResult.AwayWin)
  ) {
    manUnitedWins++;
  }
}
console.log(manUnitedWins);
