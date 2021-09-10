const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todoList");

const LOCAL_TODOS = "todos";
let todos = [];

function handleSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: todos.length+1
  };
  todos.push(newTodoObj);
  makeTodo(newTodoObj);
  saveTodo();
}

function makeTodo(value) {
  const li = document.createElement("li");
  li.id = value.id;
  todoList.appendChild(li);

  const input = document.createElement("input");
  input.type = "checkbox";
  li.appendChild(input);

  const span = document.createElement("span");
  span.innerText = value.text;
  li.appendChild(span);

  const editBtn = document.createElement("button");
  editBtn.innerText = "edit"
  editBtn.addEventListener("click", editTodo);
  li.appendChild(editBtn);

  const delBtn = document.createElement("button");
  delBtn.innerText = "delete"
  delBtn.addEventListener("click", deleteTodo);
  li.appendChild(delBtn);
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  todos = todos.filter(todo => todo.id !== parseInt(li.id));
  saveTodo();
  li.remove();
}

function editTodo(e) {
  const span = e.target.previousSibling;
  const btnAction = e.target.addEventListener("click", editTodoInput);
  const editor = document.createElement("input");
  editor.type = "text";

  if(!span.childElementCount) {
    span.appendChild(editor);
  } else {
    btnAction;
  }
}

function editTodoInput(e) {
  const li = e.target.parentElement;
  const span = e.target.previousSibling;
  const input = span.firstElementChild;

  todos[todos.findIndex((e) => e.id == li.id)].text = input.value;

  saveTodo();
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  };
  loadTodo();
}

function saveTodo() {
  localStorage.setItem(LOCAL_TODOS, JSON.stringify(todos));
}

function loadTodo() {
  const storedTodo = localStorage.getItem(LOCAL_TODOS);
  if(storedTodo !== null) {
    todos = JSON.parse(storedTodo);
    todos.forEach(makeTodo);
  }
}

todoForm.addEventListener("submit", handleSubmit);
loadTodo();







