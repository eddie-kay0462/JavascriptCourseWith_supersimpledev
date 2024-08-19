const todoList = [{name: 'wash dishes', dueDate:'2022-12-22'}, {name:'make dinner', dueDate:'2022-12-22'}];

renderTodoList();
function renderTodoList()
{
    let todoListHTML = '';
    for (let i =0; i<todoList.length; i++)
    {
        const todoObject = todoList[i];
        //generating the html
        //Destructuring
        const {name, dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-btn js-delete-todo-button">Delete</button>
        `;
        todoListHTML+=html;
    }
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    document.querySelectorAll(".js-delete-todo-button").forEach((deleteButton, index) => {
        deleteButton.addEventListener("click", () =>{
            todoList.splice(index, 1); 
            renderTodoList();   
        });
    });
}

document.querySelector(".js-add-todo-button").addEventListener("click", ()=>{
    addToDo();
});
function addToDo()
{
    const inputElement =  document.querySelector('.js-name-input-2');
    const dateInputElement = document.querySelector('.js-due-date');
    const dueDate  = dateInputElement.value;
    const name =  inputElement.value;
    todoList.push({name: name, dueDate: dueDate});
    inputElement.value = '';
    renderTodoList();
}