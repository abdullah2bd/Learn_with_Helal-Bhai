const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");

// todos item
let todos = [];
// add event listener
addTaskBtn.addEventListener("click", function () {
  addTAsk(taskInput.value);

  taskInput.value = "";
});

// add task
function addTAsk(item) {
  if (item == "") {
    alert("Somethime want wrong");
    return;
  }
  todos.push(item);
  rander();
}

// rander function
function rander() {
  todoList.innerHTML = "";
  todos.forEach(function (item) {
    let li = document.createElement("li");
    li.innerHTML = item;
    todoList.appendChild(li);
  });
}
rander();
