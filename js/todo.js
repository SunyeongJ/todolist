const todoList = document.getElementById("todoList");
const addBtn = document.getElementById("addBtn");
const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");

let todos = [];

function handleSubmit(e) {
  e.preventDefault();
  const inputValue = todoInput.value;
  todos.push(inputValue);
  todoInput.value = "";
};

function makeTodoList() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  };

  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");
    li.setAttribute("id", "newTodo");
    li.innerHTML = todos[i];
    todoList.appendChild(li);
  }
};

todoForm.addEventListener("submit", (e) => {
  handleSubmit(e);
  makeTodoList();
});





