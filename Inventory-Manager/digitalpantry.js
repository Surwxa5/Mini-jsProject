const pantry=[
  {
    name:"milk",
    price:3
  },
  {
    name:"chocolate",
    price:4
  },
  {
    name:"chocopouder",
    price:6
  }
]

const list=document.getElementById("inventory-list")
list.innerHTML=''
const displayItem=()=>{
  list.innerHTML=''
  pantry.forEach((item)=>{
    const listCreate=document.createElement('li')
    listCreate.textContent=`${item.name} :${item.price}`
    
    if(item.price>5){
   listCreate.style.color='red'
   
    }
    list.appendChild(listCreate)
  })
}
document.getElementById('show-btn').addEventListener("click",displayItem)