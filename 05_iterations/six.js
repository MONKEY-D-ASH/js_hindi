// const coding = ["js", "python", "java", "html", "cpp", "ruby"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item 
// } )

// console.log(values); // undefined


// filter returns the element of the array that satisfies the given condition in the call back functon 
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4) //here this is an implicit return statement thats why we are not using {}, if we have to use {} then we have to use "return num > 4" to explicitly return the result because we have defined a new scope using 
// console.log(newNums);

// performing the same operation using the forEach method on the myNums array by storing the result of the forEach in an empty array and then printing it 

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

// console.log(newNums);

const books = [
    {title: "book one", genre:"fiction", publish: 1982, edition: 2010},
    {title: "book two", genre:"Non-fiction", publish: 1935, edition: 2024},
    {title: "book three", genre:"history", publish: 1921, edition: 2012},
    {title: "book four", genre:"science", publish: 1964, edition: 2011},
    {title: "book five", genre:"documentary", publish: 1963, edition: 2003},
    {title: "book six", genre:"fiction", publish: 1936, edition: 2005},
    {title: "book seven", genre:"history", publish: 1946, edition: 2024},
    {title: "book eight", genre:"science", publish: 1981, edition: 2001},
    {title: "book nine", genre:"Non-fiction", publish: 2006, edition: 2023},
]

let userBooks = books.filter( (bk)=> bk.genre === "fiction" && bk.publish > 1980) // using implicit return statement  

userBooks = books.filter( (bk)=> {
    return bk.publish >= 1920 && bk.genre === "history"}) // using explicit return statement because of the new scope 

console.log(userBooks); // returns the object that satisfies the filter condition
