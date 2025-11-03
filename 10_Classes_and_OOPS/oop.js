// this is a literal object or an object literal
const user = {
    username: "aashish",
    loginCount: 4,
    signedIn: true,

    getuUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`username: ${this.username}`);
        // console.log(this);
        
    }
}

// CONSTRUCTOR
// const promiseOne = new Promise() : in this line the "new" keyword is the constructor keyword that allows you to create multiple instances from a single object literal
// this new can be seen as it allowd us to form new context 

function user2(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`welcome ${this.username}`);
    }
    // return this
}

const userOne = user2("aashish", 12, true)
const userTwo = user2("chaiAurCode", 2, false)
// console.log(userOne); // here becasue of the above line of code the values assined in line 27 got overwritten by line 28 , that's why we use the "new" keyword to create a new instance

// and because of this new keyword the non-necessary things that we are getting because of "return this" as this is returning all the available functions in the given context are also not begin returned
const userThree = new user2("akr", 22, true) 
const userFour = new user2("habibi", 23422, false)
console.log(userThree.constructor); 
console.log(userThree instanceof user2); // this operator tells us if an object is an instance of a constructor or a class 

// note : when we use a new keyword 
// step 1: an empty object called instance is created
// step 2: a constructor function is called becasue of the new keyword
// step 3: this keyword injects the arguments in the new instance of the function or the method called
// step 4: the function or the method executes 


// NOTE: THE DEFAULT BEHAVIOUR OF JAVASCRIPT IS PROTOTYPAL BEHAVIOUR, it can be seen that javascript doesn't give up until it finds the value you are looking for,
// it will access the parents and grandparents and many layers above until it finds NULL value 
//  prototype is the reason behind the access of new keyword, classes, this keyword and prototypal inheritance behaviour 

// array is also an object in javascript and object does not have a parent (NULL) 
// similarly string is also an object and the object does not have have parent (NULL)
// the properties available in the object are also available in the string and array.
// so it can be seen that everything in javascript can be considered as an object 





