
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Display existing tasks
    displayTasks();

    // Add task function
    window.addTask = function () {
        const taskInput = document.getElementById('task-input');
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            tasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            displayTasks();
            taskInput.value = '';
        }
    };

    // Display tasks function
    function displayTasks() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        tasks.forEach(function (task, index) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${task}</span>
                <button onclick="removeTask(${index})">Remove</button>
            `;
            taskList.appendChild(listItem);
        });
    }

    // Remove task function
    window.removeTask = function (index) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    };
});
