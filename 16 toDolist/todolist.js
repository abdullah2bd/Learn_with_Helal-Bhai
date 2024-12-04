const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todolist = document.getElementById("todolist");
// const taskInput = document.getElementById("taskInput");
// const taskInput = document.getElementById("taskInput");

let todos = ["one", "two", "three", "four"];






// add event listener


addTaskBtn.addEventListener("click", function(){
  todos.forEach(function(item){
    todolist.innerHTML = `<li> ${todos}</li>`;
    // addTask();
  })
})


//add task

function addTask(){



  



}






































