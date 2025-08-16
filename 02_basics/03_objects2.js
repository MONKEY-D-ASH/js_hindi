// Singleton 

const tinder_user = new Object() // this is a singleton object

tinder_user.id = "abc123"
tinder_user.name = "broly"
tinder_user.is_logged_in = false

// console.log(tinder_user);

const regular_user = {
    email: "hello@gmail.com",
    full_name: {
        user_full_name: {
            first_name: "aashish",
            last_nmae: "rana"
        }
    }
}

// console.log(regular_user.full_name);
// console.log(regular_user.full_name.user_full_name.first_name); //  you can access nested object elements like this 

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"c", 6:"d"}

// const obj3 = {obj1, obj2} // this takes both objects as elements of another object

// const obj3 = Object.assign(obj1, obj2) // this is one way to combine two object,in the assign function the first parameter is the target and the second is treated as the source if we won't write {} then the source objects elements will be copied in the target object. here both obj3 and obj1(target object) are equal or they have the same reference 

// const obj3 = Object.assign({}, obj1, obj2, obj4) // these braces are optional as they only guarantees that the combined entity will be an object, also using this we can now combine more than two objects on the go as {} will work as the target object and the follow ups will be treated as the source.

const obj3 = {...obj1,...obj2,...obj4} // using spread operator you can efficiently join two or more object just like in array, recommended method
// console.log(obj3);

// we can also create an array of objects in the form of comma seperated values
 const users = [
    {
        id:1,
        email: "one@gmail.com"
    },
    {
        id:2,
        email: "two@gmail.com"
    },
    {
        id:3,
        email: "three@gmail.com"
    }

 ]

// console.log(users[1].email); // now to access the data inside the array of objects 

console.log(tinder_user);
console.log(Object.keys(tinder_user)); // this returns an ARRAY of the keys of the object
console.log(Object.values(tinder_user)); // this returns an ARRAY of the values of the object
console.log(Object.entries(tinder_user)); // this returns an ARRAY of the keys and values of the object in an ARRAY

console.log(tinder_user.hasOwnProperty("is_logged_in")); // this property checks if an object has a certain property or not and return a boolean

