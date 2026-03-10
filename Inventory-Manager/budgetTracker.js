const Inventory=[
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

const list = document.getElementById('item-list')
const inputText=document.getElementById("input-text")

const displayItem = ()=>{
list.innerHTML= ''
Inventory.forEach((item)=>{
const inputText = Inventory.filter(item=>item.price<5)

if(inputText===0){
  inputText.textContent='"You cant afford anything!"'
}
 const newItem=document.createElement('li')
 newItem.textContent=`item:${item.name} price:${item.price}`

 list.appendChild(newItem)
 
})
}
document.getElementById('showItem').addEventListener("click",displayItem)