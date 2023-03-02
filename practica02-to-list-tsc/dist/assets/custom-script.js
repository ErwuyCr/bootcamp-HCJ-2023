"use strict";
const textTask = document.getElementById("inputTextTask");
const taskAddButton = document.getElementById("taskAddButton");
const todoListTaskSeccion = document.getElementById("todoListTaskSeccion");
taskAddButton.addEventListener("click", addTask);
function addTask() {
    if (textTask.value) {
        createTask(textTask.value);
    }
    cleanInputElement();
}
function createTask(task) {
    let iconRemoveButton = createIcon('fa fa-trash');
    let removeTaskButton = createButton();
    let taskLabel = createLabel(task);
    let taskContainer = createContainer();
    removeTaskButton.appendChild(iconRemoveButton);
    taskContainer.appendChild(taskLabel);
    taskContainer.appendChild(removeTaskButton);
    todoListTaskSeccion.appendChild(taskContainer);
}
function createIcon(iconName) {
    const icon = document.createElement("i");
    icon.classList.add(iconName);
    icon.style.fontSize = "25px";
    return icon;
}
function createButton() {
    const createBtn = document.createElement("button");
    createBtn.setAttribute("class", "btn");
    createBtn.addEventListener('click', (event) => event.target.remove());
    return createBtn;
}
function createLabel(task) {
    const label = document.createElement('label');
    label.textContent = task;
    return label;
}
function createContainer() {
    const containerDiv = document.createElement("div");
    return containerDiv;
}
function cleanInputElement() {
    textTask.value = "";
}
