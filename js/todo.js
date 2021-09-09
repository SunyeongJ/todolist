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
};

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
};

function deleteTodo(e) {
  const li = e.target.parentElement;
  todos = todos.filter(todo => todo.id !== parseInt(li.id));
  saveTodo();
  li.remove();
};

function editTodo(e) {
  const span = e.target.previousSibling;
  const btn = e.target;
  let editor = document.createElement("input");
  editor.type = "text";
  if(span.childElementCount === 0) {
    span.appendChild(editor);
  } else {
    btn.addEventListener("click", editTodoInput);
  }
};

function editTodoInput(e) {
  const li = e.target.parentElement;
  const span = e.target.previousSibling;
  const input = span.firstElementChild;
  let text = span.innerText;

  todos[todos.findIndex((e) => e.id === li.id)];
  console.log(li.id);
  console.log(todos);
  input.remove();
}

function saveTodo() {
  localStorage.setItem(LOCAL_TODOS, JSON.stringify(todos));
};

todoForm.addEventListener("submit", handleSubmit);

//refresh
const storedTodo = localStorage.getItem(LOCAL_TODOS);

if(storedTodo !== null) {
  todos = JSON.parse(storedTodo);
  todos.forEach(makeTodo);
};





