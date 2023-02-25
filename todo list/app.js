//selectors
const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");
const filterOption = document.querySelector(".filter_todo");
//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
//functions

function addTodo(event) {
  event.preventDefault();
  //todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //todo LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo_item");
  todoDiv.appendChild(newTodo);
  if (todoInput.value === "") {
    return null;
  }
  
  //delete BUTTON
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete_btn");
  todoDiv.appendChild(deleteButton);
  //Append to Actual LIST
  todoList.appendChild(todoDiv);
  //Clear todo input VALUE
  todoInput.value = "";
}

//DELETE & CHECK
function deleteCheck(e) {
  const item = e.target;
  //DELETE ITEM
  if (item.classList[0] === "delete_btn") {
    const todo = item.parentElement;
    //ANIMATION TRANSITION
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //COMPLETE ITEM
  if (item.classList[0] === "complete_btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completedItem");
  }
}
