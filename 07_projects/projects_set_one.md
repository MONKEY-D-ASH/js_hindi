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