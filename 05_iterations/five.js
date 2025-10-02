const coding = ["js", "python", "java", "javascript", "cpp"]

// coding.forEach( function (item) {  //this function inside this forEach syntax is a call back function (means we are not storing it seperately , we are just using this function in the loop only), thats why it doesn't have a name and this function will take each element of this array as its argumnet one by one 
//      console.log(item);
     
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

function printMe(item){
    console.log(item); 
}

// coding.forEach(printMe) // using a predefined function in the for each loop, and we are passing the reference of the function that's why we only wrote its name instead of printMe() with parenthesis.


coding.forEach( (item, index, arr) => {   // by default these are the values that the forEach property can access in an array,  the element itself, its index and the whole array too.
    // console.log(item, index, arr);    
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);  //using item to access each object of the array and then to access the property of an object we know previously that we use obejctNmae.objectProperty so here item is the name and languageName is the property
} )

