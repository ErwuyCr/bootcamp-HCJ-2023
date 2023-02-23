const textTask: HTMLInputElement = document.getElementById("inputTextTask") as HTMLInputElement;
const taskAddButton: HTMLButtonElement = document.getElementById("taskAddButton") as HTMLButtonElement;
const todoListTaskSeccion: HTMLDivElement = document.getElementById("todoListTaskSeccion") as HTMLDivElement;

taskAddButton.addEventListener("click", addTask);


function addTask(): void{

    if(textTask.value){
        createTask(textTask.value);
    }
    cleanInputElement();

}



function createTask(task: string): void{

    let taskContainer: HTMLDivElement = document.createElement("div");
    let taskLabel: HTMLLabelElement = document.createElement('label');
    let removeTaskButton: HTMLButtonElement = document.createElement("button");
    let iconRemoveButton: HTMLSpanElement = document.createElement("i");
    
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


function removeTask(element: HTMLButtonElement): void{

    let removeTaskElement: HTMLDivElement = element.parentNode as HTMLDivElement;
        console.log(removeTaskElement);
        removeTaskElement.remove();

}

function cleanInputElement(): void{
    textTask.value = ""; 

}



