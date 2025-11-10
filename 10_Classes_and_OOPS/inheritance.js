class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // now instead of writing all that .call and this keyword while calling a function from another function we can simply use the super keywrod to let let access the property from the parent class 
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("shivani", "shivani@gmail.com", 12345) // creating a new obejct of the Teacher class
console.log(chai);
chai.addCourses()
chai.logMe()

const tea = new User("tea")
console.log(tea);
tea.logMe()
// tea.addCourses() this throws an error as parent class cannot access properties of the children class

console.log(chai instanceof Teacher);
console.log(chai instanceof User);

// resume from 8:32:00 
