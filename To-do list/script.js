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
    // render task used to show the task
    this.renderTask()
     // After successfully adding a task, this line clears the input box so the user can type the next task without deleting manually.
    this.TaskInput.value=""
    
  }
  renderTask(){
    // .innerhtml clears all existing items before adding new ons
    this.Tasklist.innerHTML="";
    this.tasks.forEach((task,index)=>{
      const li =document.createElement("li")
      li.textContent=task
       // Adds (attaches) the <li> to the <ul> or <ol> in the webpage.
      // So tasks appear visually on the screen.
      this.Tasklist.appendChild(li)
    })


  }
}
new toDoApp()