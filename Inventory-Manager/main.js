
const inventory=[
  {
    name:"lamp",
    price:1500
  },
  {
    name:"sofa",
    price:30000
  },
  {
    name:"Hanger",
    price:100
  }
]
const list = document.getElementById("item_list")
list.innerHTML=''
const displayInventory=()=>{

// using the foreach loop in array for better efficiency
inventory.forEach((item)=>{
  // creating a element in js to append in html
  const newitem=document.createElement("li")
  newitem.textContent=`${item.name}costs $${item.price}`
  list.appendChild(newitem)
 
})
}
 document.getElementById('showinventory').addEventListener("click",displayInventory)




