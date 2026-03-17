let taskList = []; // Your storage box

const addTask = () => {
const userInputTask= userInput.value
if(userInputTask === ''){
  alert("Type something first")
  return
}
 const taskObject ={
  name:userInputTask,
  priority:"high",
  id : Date.now()
 }
  taskList.push(taskObject); 
renderTasks()
userInput.value = ""
  
}

const userInput = document.getElementById('user-input-task')
const Task = document.getElementById('task')


const renderTasks = () => {
Task.innerHTML = ''
taskList.forEach((task)=>{
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

  // will do it tomorrow 



})

}
const deleteTask = (id) => {
  // Filter out the task with the matching ID
  taskListArray = taskListArray.filter(task => task.id !== id);
  
  // Re-draw the list
  renderTasks();
};
document.getElementById("addTask-btn").addEventListener("click",renderTasks)





