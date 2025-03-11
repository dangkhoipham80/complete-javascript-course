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
// const calcAverage = (first, second, third) => (first + second + third) / 3;

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= 2 * avgKoalas) 
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//     else if(avgKoalas >= 2 * avgDolphins) 
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//     else
//         console.log("No team wins...")
// }

// const scoreDolphins  = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// checkWinner(scoreDolphins, scoreKoalas)

// 39. Introduction to Arrays
// const friend1 = 'Michael';
// const friend2 = 'Steven';    
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// // 40. Basic Array Operations (Methods)
// const newLength = friends.push('Khôi');
// console.log(friends);
// console.log(newLength);

// const a = friends;
// a.push('Khoa');
// console.log(a)
// console.log(friends)

// friends.unshift('John');
// console.log(friends);

// const popped = friends.pop();
// console.log(popped);
// console.log(friends)

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

// friends.push(23)
// console.log(friends);
// console.log(friends.includes('23'));
// console.log(friends.includes(23));

// // Assignment
// const calcTip = (bill) => bill > 50 && bill < 300 ? 0.15 * bill : 0.2 * bill;

// const bills = [125, 555, 44];

// const tips = bills.map(calcTip);

// const totals = bills.map((bill, index) => bill + tips[index]);

// bills.forEach((bill, index) => {
//     console.log(`Bill: $${bill}, Tip: $${tips[index]}, Total: $${totals[index]}`);
// });

// 42. Introduction to Object
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]
console.log(jonasArray)

const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonasObject)