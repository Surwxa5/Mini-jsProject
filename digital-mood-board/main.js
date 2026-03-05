const moodBoard=document.getElementById('mood-board')
const text = document.getElementById('text')

const partyColors=['#ff0fff',"#00ffff","#ff4500",'#32cd32']

const updateMood=(mood)=>{
  
if(mood==='morning'){
  text.textContent="Wake up!"
  moodBoard.style.backgroundColor='lightblue'
}
else if(mood==='midnight'){
  text.textContent="Sleep tight,"
  moodBoard.style.backgroundColor='navy'
  moodBoard.style.color='white'
}
 else if (mood==='party')
 {
  text.textContent='Dance!'
  for(let i=0;i<partyColors.length;i++){
 let randomColor=partyColors[Math.floor(Math.random()*partyColors.length)]
 moodBoard.style.backgroundColor=randomColor
  }
 }

}
document.getElementById('morning').addEventListener("click",()=>updateMood("morning"))
document.getElementById('midnight').addEventListener("click",()=>updateMood("midnight"))
document.getElementById('party').addEventListener("click",()=>updateMood("party"))
 