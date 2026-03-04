const mood_board=document.getElementById('mood-board')
const Morning=document.getElementById('morning')
const Midnight=document.getElementById('midnight')
const Party=document.getElementById('party')
const text = document.getElementById('text')


const moodDisplay=(Mood)=>{
  
if(Mood===Morning){
  console.log(text.textContent="Wake up!")
  console.log(mood_board.style.backgroundColor='lightblue')
}
else if(Mood===Midnight){
  console.log(text.textContent="Sleep tight,")
  console.log(mood_board.style.backgroundColor='navy')
  console.log(mood_board.style.color='white')
}

}
Morning.addEventListener("click",moodDisplay)
Midnight.addEventListener("click",moodDisplay)
