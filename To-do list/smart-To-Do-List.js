let taskList = []; // Your storage box

const addTask = () => {
  const userInput = document.getElementById('user-input-task')
  const userInputTask = userInput.value
  if (userInputTask === '') {
    alert("Type something first")
    return
  }
  const taskObject = {
    name: userInputTask,
    priority: "high",
    id: Date.now()
  }
  taskList.push(taskObject);
  renderTasks()
  userInput.value = ""
}




const renderTasks = () => {

  const count = document.getElementById("countDisplay")
  const Task = document.getElementById('task')

  Task.innerHTML = ''
  taskList.forEach((taskObject) => {
    const newText = document.createElement("li")

    newText.textContent = taskObject.name + ''

    const removeButton = document.createElement("button")

    removeButton.addEventListener("click", () => {
      deleteTask(Task.id)
    })
  

    removeButton.style.marginLeft = "10px"
    removeButton.style.color = 'red'
    removeButton.textContent = "delete"
    newText.appendChild(removeButton)
    Task.appendChild(newText)

     removeButton.className = "delete-btn"



  })
  count.textContent = `Total Tasks: ${taskList.length}`;
}
const deleteTask = (id) => {
  // Filter out the task with the matching ID
   taskList = taskList.filter(task => task.id !== id);

  // Re-draw the list
  renderTasks();
};
document.getElementById("addTask-btn").addEventListener("click", addTask)
   document.getElementById("user-input-task").addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask()
        }
    })





