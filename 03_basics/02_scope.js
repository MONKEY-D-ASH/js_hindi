// javascipt code is executed line by line

// global scope is available in locally but local scope is not available globally

{} // this is called scope when it is associated with a function or a loop statement 
let a = 293 // this here is a global scope which is available throughout the code

if (true){
    let a = 10
    const b = 20
    var c = 30 
    // console.log("inner", a); // this is called block scope or local scope , which is only available withing is defined block
    
}

// console.log(a);    
// console.log(b);
// console.log(c); 

// nested scope : child function can access the contents in the parent function but vice versa is not true

function one(){
    const username = "aashish"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    // two()
}

// one()

if (true) {
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " twitter"
        // console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);

// ++++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++
console.log(addone(5)); // 6    

function addone(num){
    return num+1
}

addtwo(5)  // this here throws an error , as declaration process is different here.
const addtwo = function(num){  // this is also a representation of a function in javascript or sometimes called as an expression
    return num+2
}

