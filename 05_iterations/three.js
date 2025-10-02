// for of loop : this is an array specific loops 
// for (const element of object) {
    
// }
// element is the index that traverse through each element of the object that you specify here, and here object can be anything (even a string)

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`each character is ${greet}`);
}

// maps: sets unique key and value pair in the same order it is setted in and duplicated values are not considered 

const map = new Map()
map.set("IN", "india")
map.set("RU", "russia")
map.set("AM", "america")

// console.log(map);

// this is how to access the elements of a map
// console.log(map.get("AM"));

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'FIFA'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }