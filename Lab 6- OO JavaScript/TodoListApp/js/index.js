// completed todolist works
let todos = []

const todoInputBox = document.querySelector('#todo-input')
const todolistContainer = document.querySelector('#todolist-container')

function completed(ele) {
    if (ele.checked)
        document.querySelector('#todo1 p').classList.add('strike')
    else
        document.querySelector('#todo1 p').classList.remove('strike')
}

//delete element
function deleteTodo(ele) {
    // if (confirm('Are you sure you want to delete?')) {
    const idToDelete = ele.parentNode.id
    console.log(ele.parentNode)
    todos = todos.filter(todo => todo.id != idToDelete)
    showTodos()

}

function addTodo() {
    if (todoInputBox.value.length > 0) {
        const todo = {
            title: todoInputBox.value,
            id: Date.now().toString()
        }
        todos.push(todo)
        showTodos()

        //we save in local storage
        localStorage.setItem('todos', JSON.stringify(todos))
    }

}

function showTodos() {
    let todosHTML = todos.map(todo => todoToHTML(todo)).join('')
    todolistContainer.innerHTML = todosHTML;

    todoInputBox.value = ''
}

function todoToHTML(todo) {
    return `<div class="form-group todo" id=${todo.id}>
            <p class="todo-title">${todo.title}</p>
            <input onclick="completed(this)" class="completed icon" type="checkbox" >
            <i onclick="deleteTodo(this)" class="fa fa-trash icon"></i>
        </div>
    `
}

function clearAll() {
    todos = []
    showTodos();
}

//let us load the content
function loadTodoList(){
    let todoData = localStorage.getItem('todos')
    console.log(todoData)
   if(todoData != null){
       todos = JSON.parse(todoData)
       showTodos();
   }
}
loadTodoList()