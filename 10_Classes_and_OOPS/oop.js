// this is a literal object or an object literal
const user = {
    username: "aashish",
    loginCount: 4,
    signedIn: true,

    getuUserDetails: function(){
        console.log("got user details from database");
    }
}

console.log(user.username);
console.log(user.getuUserDetails());      
