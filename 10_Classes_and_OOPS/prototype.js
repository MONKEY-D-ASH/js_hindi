// let myName = "aashish     "

// console.log(myName.trim().length);


let myHeroes = ["spiderman", "thor", "sentry"]

let heroPower = {
    thor: "hammer",
    spiderman: "spider abilities",
    
    getSpiderPower: function(){
        console.log(`spidey power is ${this.spiderman}`); 
    }
}

// here we are defining a method in the fundamental object of the js and since everything is an object technically the other array and objects must have this function as an object in them.
// here we are accessing the top heirarchy which is object and adding a property in it and everything will eventually have access to that property in them.
Object.prototype.aashish = function(){
    console.log(`aashish is present in all objects`);
}

// heroPower.aashish() // aashish is present in all objects
// myHeroes.aashish() // aashish is present in all objects

//  now testing if we define a property in an array let say , so we get to access it in the fundamental object too.

// we are adding a prototype in the array data structure on javascript
Array.prototype.heyAashish = function(){
    console.log(`aashish says hello`);
}

// myHeroes.heyAashish() // aashish says hello
// heroPower.heyAashish() // this will throw an error as we cannot access a method of array from an object 

// INHERITANCE

const user = {
    username: "chai",
    email: "chai@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fulltime: true,
    __proto__: teachingSupport // this is used to connect two objects with each other so that they can access each other's properties
}

teacher.__proto__ = user // this is called prototypla inheritance , but this is an outdated approach 

// Modern Syntax

Object.setPrototypeOf(teachingSupport, teacher) // teacherSupport can access properties of teacher

let anotherUserName = "chaiAurCode"

// here we are adding a method directly to the String data type in javascript and then any defined string can access this method.
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"aashish".trueLength()
"iceTea".trueLength()