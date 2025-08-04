const score  = 400 // this also set the datatype as Number but it is happening implicitily

const balance = new Number(100.4384) // this will exclusively set the datatype of the variable as Number
// this is a small thing but is worth noticing 

console.log(balance);
console.log(score);``

console.log(balance.toString());
console.log(typeof(balance.toString())) // this gives the output String

console.log(balance.toString().length); // after converting this to a string we can apply string operations on it too.
console.log(balance.toFixed(2)); // this will round off the number to the number of decimals inputed, this is used to give more precise data to the user or for calculations

const other_number = 23.34234

console.log(other_number.toPrecision());
