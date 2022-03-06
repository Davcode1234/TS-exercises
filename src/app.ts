// <li>
//   <label for="task-1">Wyrzucić śmieci</label>
//   <input type="checkbox" id="task-1" name="Wyrzucić śmieci"/>
// </li>

const taskContainerElement: HTMLElement = document.querySelector(".tasks")
const taskNameInputElement: HTMLInputElement = document.querySelector("#name")
const addButtonElement: HTMLButtonElement = document.querySelector("button")

const tasks: string[] = ["Wyrzucić śmieci", "Pójść na siłkę", "Nakarmić koty"];

const render = () => {
  taskContainerElement.innerHTML = "";
  tasks.forEach(task => {
    const taskElement: HTMLElement = document.createElement("li")
    taskElement.innerText = task;
    taskContainerElement.appendChild(taskElement)
  })
}

const addTask = (task: string) => {
  tasks.push(task)
}

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask(taskNameInputElement.value)
  render();
})

render();