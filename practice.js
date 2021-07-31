//create a function that will take an ARRAY of numbers and it will return the average
function avgNumbers(arrayOfNumbers) {
    //have a loop run through the array
    //everytime it goes through the array we need to keep track of the total 
    //and add the current array value
    let total = 0;

    arrayOfNumbers.forEach(number => total = total + number);

    const average = total / arrayOfNumbers.length;
    return average;
}

let testArrayOfNumbers = [5, 5, 5, 5];

console.log(avgNumbers(testArrayOfNumbers));


let people = [
    { name: "John", age: 29 },
    { name: "Ginger", age: 38 }
];

let justNames = people.map((person) => person.name);

console.log(justNames);
//I want an array of just ages from the PEOPLE array above
let justAge = people.map((person) => person.age);

// console.log(justAge);
// console.log(avgNumbers(justAge));
//console.log the averageAge using the function above

const weather = require('./json/weather.json');

//console.log(weather.week[0].day);

// console.log(weather.week[0].high);
// console.log(weather.week[1].high);
// console.log(weather.week[2].high);
// console.log(weather.week[3].high);
// console.log(weather.week[4].high);
for (i = 0; i < weather.week.length; i++) {
    console.log(weather.week[i].high);
    console.log(weather.week[i].low);
};

//create a function that will grab all the highs 
//and return the highs in an array

function getHighs() {
    const highTemps = weather.week.map(day => day.high);
    console.log(highTemps);
    return highTemps;
    
}
//console.log the average temp from the weather object
//getHighs();

const highArray = getHighs();

console.log(avgNumbers(highArray));
//another method
console.log(avgNumbers(getHighs()));

//create a function that will grab all the lows and return the lows in an array

function getLows() {
    const lowTemps = weather.week.map(day => day.low);
    console.log(lowTemps);
    return lowTemps;
    
}

getLows();
console.log(`Lows: ${getLows()}`);

function getCloudCover() {
    const cloudCover = weather.week.map(day => day["cloud-cover"]);
    console.log(cloudCover);
    return cloudCover;
    
}

getCloudCover();