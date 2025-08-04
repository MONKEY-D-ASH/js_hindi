const score  = 400 // this also set the datatype as Number but it is happening implicitily

const balance = new Number(100.4384) // this will exclusively set the datatype of the variable as Number
// this is a small thing but is worth noticing 

// console.log(balance);
// console.log(score);``

// console.log(balance.toString());
// console.log(typeof(balance.toString())) // this gives the output String

// console.log(balance.toString().length); // after converting this to a string we can apply string operations on it too.
// console.log(balance.toFixed(2)); // this will round off the number to the number of decimals inputed, this is used to give more precise data to the user or for calculations

const other_number = 1123.64234

// console.log(other_number.toPrecision(3)); // this trims the number from the starting to the number of digits specified in the function and it also rounds off the value before the decimal if required, therefore its job as the name suggest is to give precise value to the user.

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // this function inserts commas between the number to make it more readable, and by default it is set to us standards, but to change it to indian standards use 'en-IN' inside the function 

// ******************************************* MATHS *******************************************

// console.log(Math); // this is the basic syntax to access the math library in javascript, and there are different functions available which you can perform in js.

// console.log(Math.abs(-4)); // this give the absolute value irrespective of the sign of the number , negative gives positive and postive gives positive

// console.log(Math.round(34.2847)); // this rounds of the decimal value to the nearest integer 
// console.log(Math.ceil(4.2)); // this always provide the upper hand value of the decimal number
// console.log(Math.floor(5.897)); // this always provide the lower value of the decimal number
// console.log(Math.min(-1,2,3,4,5,6,7)); // returns the minimum value from a list of numbers
// console.log(Math.max(-1,2,3,4,5,6,7)); // returns the maximun value from a list of numbers

// console.log(Math.random()); // this will always provide a value between 0 and 1 , it can be both 0 and 1
console.log(Math.floor(Math.random()*10) + 1); // we can use random function this way to represt a random number from 0 to 10 and +1 is to avoid 0 cases and same for 0 to 100

const min = 10;
const max = 30;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // learn this formula , it is very handy


