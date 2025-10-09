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