const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');

let tasks = [];

todoForm.addEventListener('submit', e => {
    e.preventDefault();

    if (todoInput.value !== '') {
        tasks.push(todoInput.value)
        addToStorage(tasks);
    }
    todoInput.value = '';
});

function renderTasks(tasks) {
    todoList.innerHTML = '';
    tasks.forEach((item, index) => {
        const element = document.createElement("div");
        element.classList.add('task')
        element.innerHTML = `${item} <button class="remove" onclick="deleteTask(${index})">X</buttton>`;
        todoList.append(element);
    });
};

function addToStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks(tasks);
};

function getFromStorage() {
    const reference = localStorage.getItem('tasks');

    if (reference) {
        tasks = JSON.parse(reference);
        renderTasks(tasks);
    }
};

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    getFromStorage();
};

getFromStorage();