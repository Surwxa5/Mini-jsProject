taskList = []


const userInput = document.getElementById('user-input-task')
const Task = document.getElementById('task')


const displayTask = () =>{
const userInputTask= userInput.value
if(userInputTask === ''){
  alert("Type something first")
  return
}
else{
 const taskObject ={
  name:userInputTask,
  priority:"high",
  id : Date.now()
 }

  const newText = document.createElement("li")
  
  newText.textContent=taskObject.name + ''

  const removeButton = document.createElement("button")

  removeButton.addEventListener("click",() =>{
    newText.remove()
  })

  removeButton.style.marginLeft ="10px"
  removeButton.style.color = 'red'
  removeButton.textContent = "delete"
  newText.appendChild(removeButton)
  Task.appendChild(newText)

 }
}
document.getElementById("addTask-btn").addEventListener("click",displayTask)



