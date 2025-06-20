"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResults_1 = require("./MatchResults");
const MatchReader_1 = require("./MatchReader");
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
let manUnitedWins = 0;
//eiter manunited was home & home won or manunited was away and away won
for (let match of reader.data) {
    if ((match[1] === 'Man United' && match[5] === MatchResults_1.MatchResult.HomeWin) ||
        (match[2] === 'Man United' && match[5] == MatchResults_1.MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
