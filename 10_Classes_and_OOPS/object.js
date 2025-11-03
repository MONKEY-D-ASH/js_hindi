function addTen(num){
    return num+10
}

addTen.power = 2

console.log(addTen(4));
console.log(addTen.power);
console.log(addTen.prototype);

// what we learned is that a function is a function as well as technically an object in javascript at the same time.so anything can be treated as an object in javascript.

function createUser(username, score){
    this.username = username
    this.score = score 
}

// since a function is an object which has properties and we can store a function as a property in in another funciton which we are treating as an object

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

// now both the above statements are calling the function createUser and it has a prototype increament which is confused whose score it has to increase
// chai or tea that's why "this" keyword is used to specify whoever called the increment function , the increment function will go and increase the score of that context
// similary whoever called the printMe function , becasue of "this" keyword a context is setup and it will know whose score it has to print

chai.printMe() // now since we have created a prototype of the function createUser , we don't have to write prototype everytime we want to access the method, 
// javascritp handles that on its own by finding the method in the parent or the parent above parent or the one above it by unfolding the layers of the function which is being treated as an object here
// now this code would throw an error if we don't write the "new" keyword because :



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/ 

