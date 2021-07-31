function averageNumbers(arrayOfNumbers) {
  let sum = 0;
  arrayOfNumbers.forEach((number) => (sum = sum + number));
  return sum / arrayOfNumbers.length;
}

let testArrayOfNumbers = [5, 5, 5, 5];

const averageTest1 = averageNumbers(testArrayOfNumbers);
// console.log(averageTest1);

/// Weather JSON Import

const weather = require("./json/weather.json");

function getHigh() {
  const highs = weather.week.map((days) => days.high);
  console.log(highs);

  return highs;
}

function getLow() {
  const low = weather.week.map((days) => days.low);
  console.log(low);

  return low;
}

// console.log(averageNumbers(getLow()));

//Give a filtered list of the days that will be OVC

function filteredCloudCoverage(cloudType) {
  let filteredList = weather.week.filter(
    (days) => days["cloud-cover"] == cloudType
  );
  return filteredList;
}

// console.log(filteredCloudCoverage("OVC"));

const bowling = require("./json/bowling-scores.json");

console.log(bowling.bowlingLeague[0].teamName);
console.log(bowling.bowlingLeague[1].teamName);
console.log(bowling.bowlingLeague[2].teamName);

for (let i = 0; i < bowling.bowlingLeague.length; i++) {
  console.log(bowling.bowlingLeague[i].teamName);

  let bowler1Scores = bowling.bowlingLeague[i].players[0].scores;
  let bowler2Scores = bowling.bowlingLeague[i].players[1].scores;

  let bowler1Average = averageNumbers(bowler1Scores);
  console.log(bowler1Average);
}
