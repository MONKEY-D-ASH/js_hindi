// everything we are doing here is after the ES6 version of javascript 

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){ //method is typically a custom function or a method provided by a third-party library that implements a cryptographic algorithm to transform a user's plain-text password into a secure, unreadable format.
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chuski", "chuski@gmail.com", 1234)

// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// behind the scene 

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){ // we are defining a method in the User object's prototype directly 
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const chai2 = new User("chai_ki_chuski", "chaichuski@gmail.com", 98723)

console.log(chai2.encryptPassword());
console.log(chai2.changeUserName());
