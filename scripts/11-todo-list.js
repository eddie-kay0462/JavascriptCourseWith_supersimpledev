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
        <button onclick="
            todoList.splice(${i}, 1); 
            renderTodoList();   
        " class="delete-todo-btn">Delete</button>
        `;
        todoListHTML+=html;
    }
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
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