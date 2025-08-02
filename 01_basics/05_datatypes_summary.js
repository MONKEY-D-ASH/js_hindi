// NOTES : some important notes for interview and general knwoledge about datatypes 
// on the official documentation of javascript on the ecma script learn about the datatype of differnt values when they are passes in the typeof operator.


// # primitive datatypes or reference datatypes
//  it has 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt(used for scientific values)

const score = 100
const scoreValue = 100.2

const isLoggedIn = false
const outsideTemp = null
let userEmail; // by default this variable is undefined 

const id = Symbol('1233')
const anotherId = Symbol('1233')

// console.log(id === anotherId);

const bigNumber = 234234242342342535345n
// this small n in the end tells the js to treat this variable as BigInt and also by default js treat large numbers as BigInt

// # Reference type or non-primitive datatypes
// arrays, objects, functions

const heroes = ["ironman", "batman", "captain america"] // this is a declaration of an array

// this is an object declaration, there can be different datatypes, don't forget to use comma between the values
let myObj = {
    name: "aashish",
    age: 21
}

// this is a function declaration
const myFunction = function(){
    // console.log("hello world");
}

// console.log(typeof(outsideTemp));
// console.log(typeof(scoreValue));
// console.log(typeof(score));
// console.log(typeof(myFunction)); // in the official documentation this is generally called a function object
// console.log(typeof(heroes)); 
// console.log(typeof(id)); 
// console.log(typeof(anotherId)); 
// console.log(typeof(myObj)); 
// console.log(typeof(isLoggedIn)); 

// **************************************************************************************************************

// stack memory (all primitive types are based on stack) and heap memory (all non primitive types area based on heap memory)

let myYoutubeName = "aashish_rana_code"

let anotherName = myYoutubeName

anotherName = "chai aur code"

console.log(myYoutubeName); // this will give output aashish_rana_code 
console.log(anotherName); // this will give output chai aur code as the memory used here is stack

let user1 = {
    email: "user@gmail.com",
    upi: "upi2@gpl"
}

let user2 = user1 // this variable user2 is decalred in stack but the values it has is the reference of the value of user1 stored in heap memory

console.table(user2) // this will give the elements of the user1 as the output

user2.email = "google@gmail.com"; // the value will get changed as the reference is same 

console.log(user1.email)
console.log(user2.email)