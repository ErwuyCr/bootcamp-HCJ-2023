const textTask: HTMLInputElement = document.getElementById("inputTextTask") as HTMLInputElement;
const taskAddButton: HTMLButtonElement = document.getElementById("taskAddButton") as HTMLButtonElement;
const todoListTaskSeccion: HTMLDivElement = document.getElementById("todoListTaskSeccion") as HTMLDivElement;

taskAddButton.addEventListener("click", addTask);

function addTask(): void {

    if (textTask.value) {
        createTask(textTask.value);
    }
    cleanInputElement();

}

function createTask(task: string): void {

    let iconRemoveButton: HTMLSpanElement = createIcon('fa fa-trash');
    let removeTaskButton: HTMLButtonElement = createButton();
    let taskLabel: HTMLLabelElement = createLabel(task);
    let taskContainer: HTMLDivElement = createContainer();

    removeTaskButton.appendChild(iconRemoveButton);
    taskContainer.appendChild(taskLabel);
    taskContainer.appendChild(removeTaskButton);
    todoListTaskSeccion.appendChild(taskContainer);
}

function createIcon(iconName: string): HTMLSpanElement{
    const icon: HTMLSpanElement = document.createElement("i");
    icon.classList.add(iconName);
    icon.style.fontSize = "25px";
    return icon;
}

function createButton(): HTMLButtonElement{
    const createBtn: HTMLButtonElement = document.createElement("button");
    createBtn.setAttribute("class", "btn");
    createBtn.addEventListener('click', (event: MouseEvent) => (<HTMLElement>event.target).remove());
    return createBtn;
}

function createLabel(task: string): HTMLLabelElement{
    const label: HTMLLabelElement = document.createElement('label');
    label.textContent = task;
    return label;
}

function createContainer(): HTMLDivElement {
    const containerDiv: HTMLDivElement = document.createElement("div");
    return containerDiv;
}

function cleanInputElement(): void {
    textTask.value = "";

}
