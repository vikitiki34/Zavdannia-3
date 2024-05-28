function fetchTasks() {
    const taskCount = document.getElementById('taskCount').value;
    if (!taskCount) {
        alert('Please enter a valid number of tasks.');
        return;
    }
    const apiUrl = `https://jsonplaceholder.typicode.com/todos?_limit=${taskCount}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayTasks(data))
        .catch(error => console.error('Error fetching tasks:', error));
}

function displayTasks(tasks) {
    const taskListContainer = document.getElementById('taskList');
    taskListContainer.innerHTML = '';
    tasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        if (task.completed) {
            taskCard.classList.add('completed');
        }
        taskCard.innerHTML = `
            <h3>${task.title}</h3>
            <p>User ID: ${task.userId}</p>
            <p>Task ID: ${task.id}</p>
            <p>Status: ${task.completed ? 'Completed' : 'Incomplete'}</p>
        `;
        taskListContainer.appendChild(taskCard);
    });
}