const user={
  name:'Code Learner',
  bio:'Current Status:Beginner',
  Level:1
}
const levelupButton=document.getElementById('level-up-btn')
const userLevel=document.getElementById('user-level')
const Card=document.getElementById('Card')
const bio=document.getElementById("user-bio")
const userProfile=(level)=>{
  
  if(user.Level>=5){
  bio.textContent="Current Status:Pro Developer"
  Card.style.border="Gold"

  }
}
levelupButton.addEventListener("click",userLevel.level+1)
