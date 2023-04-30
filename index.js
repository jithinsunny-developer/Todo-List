const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const todoList = document.getElementById('todo-list');

function addTask() {
    if (newTaskInput.value.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = newTaskInput.value;
        todoList.appendChild(newTask);
        newTaskInput.value = '';

        newTask.addEventListener('click', function() {
            newTask.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(newTask);
        });
        newTask.appendChild(deleteButton);
    }
}

addTaskButton.addEventListener('click', addTask);
