const user = {
    _email: 'aashishji@ash.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this.email = value
    }
}

const tea = Object.create(user)
console.log(tea.email);
