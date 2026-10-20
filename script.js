let todos = [
    {id: 1, text: "Learn JavaScript"},
    {id: 2, text: "Build a to-do app"},
    {id: 3, text: "Master DOM manipulation"}
];

const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addTodo);
todoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTodo();
    }
});


function createTodoElement(todo) { 
    const li = document.createElement("li"); 
    li.classList.add("todo-item"); 

    const span = document.createElement("span");
    span.classList.add("todo-text");
    span.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTodo(todo.id));

    li.appendChild(span);
    li.appendChild(deleteButton);
    
    return li; 

}

function renderTodos() {
    todoList.innerHTML = ''; 
    todos.forEach((todo, index) => {
        const li = createTodoElement(todo);
        todoList.appendChild(li);
    });
}

// Add todo
function addTodo() {
    const inputText = todoInput.value.trim(); 

  
    if (inputText !== "") {
          const newTodo = {
        id: Date.now(), 
        text: inputText
    };

        todos.push(newTodo);
        todoInput.value = ""; 
        renderTodos(); 
    }
}

// Delete todo
function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
}



renderTodos();