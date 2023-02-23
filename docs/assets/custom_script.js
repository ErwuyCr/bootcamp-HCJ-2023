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
    let taskContainer = document.createElement("div");
    let taskLabel = document.createElement('label');
    let removeTaskButton = document.createElement("button");
    let iconRemoveButton = document.createElement("i");
    taskLabel.textContent = task;
    removeTaskButton.setAttribute("class", "btn");
    removeTaskButton.addEventListener('click', () => {
        removeTask(removeTaskButton);
    });
    iconRemoveButton.classList.add("fa", "fa-trash");
    iconRemoveButton.style.fontSize = "25px";
    todoListTaskSeccion.appendChild(taskContainer);
    taskContainer.appendChild(taskLabel);
    taskContainer.appendChild(removeTaskButton).appendChild(iconRemoveButton);
}
function removeTask(element) {
    let removeTaskElement = element.parentNode;
    console.log(removeTaskElement);
    removeTaskElement.remove();
}
function cleanInputElement() {
    textTask.value = "";
}
