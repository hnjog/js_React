const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function paintToDo(todo) {
    const li = document.createElement("li");
    li.id = todo.Id;
    const span = document.createElement("span");
    span.innerText = todo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", handleTodoErase);

    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function loadToDos() {
    const saveToDos = localStorage.getItem(TODOS_KEY);
    if (saveToDos != null) {
        const parseTodos = JSON.parse(saveToDos);
        toDos = parseTodos;
        parseTodos.forEach(paintToDo);
    }
}

function handleTodoErase(event) {
    const li = event.target.parentElement;
    const targetId = li.id;
    // 람다를 이용하여 현재 targetId와 비교한다
    toDos = toDos.filter((item) => item.Id != targetId);

    li.remove();
    saveToDos();
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        Id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

loadToDos();
todoForm.addEventListener("submit", handleTodoSubmit);