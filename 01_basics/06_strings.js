
// NOTE: the more string methods you learn about the better it is for your knowledge and your interviews, use mdn references, you could even right an article as a practice to learn about different string methods.

const name = "aashish" // this stores string as a complete value 
const repoCount = 50

// console.log(name + repoCount + "value") this is not recommended anymore , so don't follow it 

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`) // use backticks and ${} to display variables, SIMPLE! this is more readable

const gameName = new String('aashish-sc') // this is a string object and it assigns an index to each alphabet similar to array

// console.log(gameName);
// console.log(name);

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());


// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('s'));


const newString = gameName.substring(0,4) // the end value is not taken here. we cannot use negative in this function 
console.log(newString);

const anotherString = gameName.slice(-6,8) // we can also us negative in this slice function 
console.log(anotherString);

const newStringOne = "     akinator   "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes the extra white spaces in the intial and the end of the string

const url = "https://aashish.com/aashish%20rana" // in url coding the browser generally changes the white space with "%20"

console.log(url.replace('%20', '-')); // put what to replace and what to replace with 

console.log(url.includes("sundar")); // this tells whether something is present in another string or not , it returns a boolean

const wowName = new String('arnold-schwarzeneggar-com')

console.log(wowName.split('-')); // this will create an array which has three strings as its elements which are "arnold" "schwarzeneggar" and "com".




