const Input= document.getElementById('guessInput')
const clickButton= document.getElementById('guessButton')
const show= document.getElementById('result')

const finalButton=clickButton.addEventListener('click',output)

const computer=Math.floor(Math.random()*10)+1

function output(){

  let a=Number(Input.value)

  if(a<1||a>10){
    show.textContent="please enter a number between 1 and 10";
    return;
  }
    if(a===computer){
     show.textContent="Correct"
    }
    else if(a>computer){
      show.textContent="To high"
    }
    else 
    {
      show.textContent="To low"
    }
}
