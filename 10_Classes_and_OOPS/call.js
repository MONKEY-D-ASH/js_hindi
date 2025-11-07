function setUserName(username){
    // complex database calls 
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    setUserName.call(username) // this .call method is used to hold the reference of the function called here so that after it executes it doesn't disappear from the call stack and we would still have the values setted 
     

    this.email = email
    this.password = password
}

const hey = new createUser("google", "google@gmail.com", 1234)
console.log(hey);
