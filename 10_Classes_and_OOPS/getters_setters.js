class user{
    constructor(email, password){
        this.email = email
        this.password = password 
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    set password(value){
        this._password = value
    }
    get password(){
        return this._password.toUpperCase()
    }
}

const aashish = new user("aashish@gmail.com", "ash@123")
console.log(aashish.password);
console.log(aashish.email);
