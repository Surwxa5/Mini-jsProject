class toDoApp{
  constructor(){
    this.tasks=[]
    this.TaskInput=document.getElementById('taskInput')
    this.Tasklist=document.getElementById('todo-list')
    this.addButton=document.getElementById('todo-button')
    this.addButton.addEventListener('click',()=>this.addTask())
  }
  addTask(){
    // to convert input into value
    const taskText=this.TaskInput.value
    if(!taskText) return;
    this.tasks.push(taskText)
    this.renderTask()
    this.TaskInput.value=""
    
  }
  renderTask(){
    this.Tasklist.innerHTML="";
    this.tasks.forEach((task,index)=>{
      const li =document.createElement("li")
      li.textContent=task
      this.Tasklist.appendChild(li)

    })


  }
}
new toDoApp()