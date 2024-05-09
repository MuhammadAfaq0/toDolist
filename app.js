let tasks = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Enter task");
        return;
    }
    tasks.push(taskText);
    displayTasks();
    taskInput.value = "";
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
function displayTasks() {
    let tasksList = document.getElementById("tasksList");
    tasksList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = `<span>${tasks[i]}</span>
        <button onclick="removeTask(${i})">Remove</button>`;
        tasksList.appendChild(li);
    }
}
