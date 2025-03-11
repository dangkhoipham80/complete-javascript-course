// 32. Activating strict mode
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

// 33. Functions
// function logger() {
//     console.log('My name is Jonas');
// }

// // calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// 34. Function Declarations vs. Expressions    
// Function declaration
// function calcAge1(birthYear) {   
//     return 2037 - birthYear;
// }

// // Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// // 35. Arrow functions
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));

// // 36. Functions calling other functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }   

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// Assgiment 5
/* Write your code below. Good luck! 🙂 */
const calcAverage = (first, second, third) => (first + second + third) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) 
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    else if(avgKoalas >= 2 * avgDolphins) 
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    else
        console.log("No team wins...")
}

const scoreDolphins  = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

checkWinner(scoreDolphins, scoreKoalas)
