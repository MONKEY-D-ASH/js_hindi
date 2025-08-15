// Array

// In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

const myArr = [0,1,2,3,4,5]
const myHeroes = ["batman", "ironman"]
const myArr2 = new Array(1,2,3,4,5,6,7)

// console.log(myArr[3]);

// array methods 

// myArr.push(6) 
// myArr.push(7)
// myArr.pop() 
// myArr.unshift(5) 
// myArr.shift() 

// console.log(myArr.includes(9));  
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()

// console.log(myArr); 
// console.log(newArr);

// slice, splice

// console.log("A ", myArr);

// const newArr2 = myArr.slice(1,3) // slices the elements from the start to the element one short from the end

// console.log(newArr2);
// console.log("B ", myArr);

// const newArr3 = myArr.splice(1,3) // slices the elements at the ends and between the indexes and the operations takes place on the original array so original array shrinks

// console.log("C ", myArr);
// console.log(newArr3);

const marvel_heroes = ["ironman", "spiderman", "hulk", "thor"]
const dc_heroes = ["batman", "superman" , "flash"]

// marvel_heroes.push(dc_heroes) // this action takes the whole array as an elemet and push it in the given array, therefore creating a nested array
// console.log(marvel_heroes[4][2]);

// const all_heroes = marvel_heroes.concat(dc_heroes) // concat returns a new array
// console.log(newArr4);

const all_new_heroes = [...marvel_heroes,...dc_heroes] // this is spread operator, just like the pieces of glasses that spread all over  the ground when you drop it. it is more  preferred as we can concatinate more than two arrays on the go.
console.log(all_new_heroes);

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) // collapses the nested arrays according to your required deapth
console.log(real_another_array);


console.log(Array.isArray("aashish")) // this Array is used to access the array methods just like Math is used to access math methods
console.log(Array.from("aashish")) // converts the given object into an array

console.log(Array.from({name: "aashish"})) // interesting case, if you don't specify that you are using keys to identify elements in your array then it will give [] in your output

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // creates an array of the given variables


