// global scope is available in locally but local scope is not available globally

{} // this is called scope when it is associated with a function or a loop statement 
let a = 293 // this here is a global scope which is available throughout the code

if (true){
    let a = 10
    const b = 20
    var c = 30 
    console.log("inner", a); // this is called block scope or local scope , which is only available withing is defined block
    
}

console.log(a);    
// console.log(b);
// console.log(c); 



