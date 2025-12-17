// this property tells you about the hidden stuffs about the object 
const discripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

// console.log(discripter);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai : function(){
        console.log("chai nahi ban payi");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value != 'function'){
        console.log((`${key} : ${value}`));
    }
}