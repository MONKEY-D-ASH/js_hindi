<!-- click on markdown preview button on the top right corner to see the preview of this markdown file -->

# projects realted to DOM  

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript

console.log("aashish")
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( function(button){
  // console.log(button);
  button.addEventListener('click', function(event){
    console.log(event)
    console.log(event.target)
    // this is using the if statement
    // if(event.target.id === 'grey'){
    //   body.style.backgroundColor = event.target.id
    // }
    switch (event.target.id){
      case 'grey':
            body.style.backgroundColor = event.target.id
        break;
      case 'white':
            body.style.backgroundColor = event.target.id
        break;
      case 'blue':
            body.style.backgroundColor = event.target.id
        break;
      case 'yellow':
            body.style.backgroundColor = event.target.id
        break;
      case 'pink':
            body.style.backgroundColor = event.target.id
        break;
        default:
          break;
    }
  })
} );

```

# solution code

## project 2

```javascript

// use #id in the querySelector to select id and use .class to select class

// preventDefault is used to halt the default protocol of the event or the component
// to get the value from the input tag we used the .value feature, it returns the value inputed in the input tag and parseInt is used to convert the string value into integer value to perform calculations because the .value returns a string datatype value

// const height = parseInt(document.querySelector('height').value) defining the values outside the event function will load empty values in the variables as the web page loads , we want to take the values as soon as the user clicks on the calculate button (event happening) that's when we want to take the values from the form.

//  isNaN() is used to check whether a value is NaN or not, you could also use a != method but this function is more recommended 

const form = document.querySelector('form')

form.addEventListener('submit', function(event){
  event.preventDefault();
  const height = parseInt(document.querySelector('#height').value) 
  const weight = parseInt(document.querySelector('#weight').value) 
  const result = document.querySelector('#results')
   if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = "please provide a valid height"
   }else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = "please provide a valid weight"
   }
   else{
  const bmi = (weight/((height*height)/10000)).toFixed(2)

  if(bmi <= 18.6){
    result.innerHTML = `<span>${bmi}: you are underweight</span>`
  }else if(bmi < 24.9 && bmi > 18.6){
    result.innerHTML = `<span>${bmi}: you are in normal range</span>`
  }
  else{
    result.innerHTML = `<span>${bmi}: you are overweight</span>`
  }

 }
})

```

# solution code

## project 3

```javascript
// always write the setInterval function in this format mostly, 1000 is for 1sec, 2000 is for 2sec,the function specifies what will happen and that 1000 specifies after how much time it will happen according to the user's system settings.
// date.toLocaleTimeString : this method returns the time portion of a date as a string according to user's locale setting

const clock = document.querySelector('#clock');
// document.getElementById('#clock')
// creating a new date object

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

# solution code

## project 4

```javascript
let randomNum = Math.round(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    const inputNum = parseInt(userInput.value);
    // console.log(inputNum);
    validateGuess(inputNum);
  });
}

function validateGuess(guess) {
  if (guess == '' || guess < 1 || guess > 100 || isNaN(guess)) {
    alert('please enter a valid number');
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomNum}.`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // it will check the number and tell whether it is high or low or equal
  if (guess === randomNum) {
    displayMessage(`you guessed it right!`);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`Number is Too low`);
  } else if (guess > randomNum) {
    displayMessage(`Number is Too high`);
  }
}

function displayGuess(guess) {
  // it will do the following things:
  // it will clean up the userInput area
  // it will add the previous guess number in the previous guess slot
  // it will update the value of the remaining guess
  userInput.value = ''
  guessSlot.innerHTML += `${guess} `
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`

}

function displayMessage(message) {
  // it will display the message on the page
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  // it will indicate the termination of the game
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
  // it will indicate to start a new game
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(event){
    event.preventDefault()
    randomNum = Math.round(Math.random() * 100 + 1);
    prevGuess = [] // resetting the previous guesses
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}

```