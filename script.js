let todos = [
    {id: 1, text: "Learn JavaScript"},
    {id: 2, text: "Build a to-do app"},
    {id: 3, text: "Master DOM manipulation"}
];


const todolist = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

// Create todo item element
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

// Render todos
function renderTodos() {
    // TODO: Implement this function
    // 1. Clear the existing list
    // 2. Loop through the todos array
    // 3. For each todo, call createTodoElement(todo) and append the result to the todo list
}

// Add todo
function addTodo() {
    // TODO: Implement this function
    // 1. Get the text from the input field
    // 2. If the text is not empty:
    //    a. Create a new todo object with a unique id and the input text
    //    b. Add the new todo object to the todos array
    //    c. Clear the input field
    //    d. Call renderTodos() to update the display
}

// Delete todo
function deleteTodo(id) {
    // TODO: Implement this function
    // 1. Remove the todo with the given id from the todos array
    // 2. Call renderTodos() to update the display
}

// TODO: Add a click event listener to the add button that calls addTodo

// TODO: Add a keypress event listener to the input field 
// that calls addTodo when the Enter key is pressed

// Initial render
renderTodos();