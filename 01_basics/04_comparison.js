// NOTE: code must be easy to understand , a clean and organized code it the best code.

// console.log(2>1);
// console.log(3>=3);
// console.log(3<4);
// console.log(3==4);
// console.log(3!=4);

// console.log("2">1);
// console.log("02">1);

// console.log(null >0);
// console.log(null==0);
// console.log(null>=0);
// we avoid these kind of conversion as it makes code less easy to understand 

//NOTE: the reason is that an equality check == and comparisons > < >= <= work differently. comparisons convert null to a number, treating it as 0.thats why null>=0 is true and null>0 is false.

// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);
// we avoid these kinds of conversion too as it makes the code less understandable.

// === this is strictly check, it compares the two values along with their datatypes

console.log("2" === 2);
