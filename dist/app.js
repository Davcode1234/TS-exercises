// <li>
//   <label for="task-1">Wyrzucić śmieci</label>
//   <input type="checkbox" id="task-1" name="Wyrzucić śmieci"/>
// </li>
const taskContainerElement = document.querySelector('.tasks');
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('button');
const categories = ['general', 'work', 'gym', 'hobby'];
const tasks = [
  {
    title: 'Wyrzucić śmieci',
    done: false,
    category: 'work',
  },
  {
    title: 'Pójść na siłkę',
    done: true,
    category: 'gym',
  },
  {
    title: 'Nakarmić koty',
    done: false,
    category: 'hobby',
  },
];
const render = () => {
  taskContainerElement.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskElement = document.createElement('li');
    if (task.category) {
      taskElement.classList.add(task.category);
    }
    taskElement.classList.add(task.category);
    const id = `task-${index}`;
    const labelElement = document.createElement('label');
    labelElement.innerText = task.title;
    labelElement.setAttribute('for', id);
    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.name = task.title;
    checkboxElement.id = id;
    checkboxElement.checked = task.done;
    checkboxElement.addEventListener('change', () => {
      task.done = !task.done;
    });
    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkboxElement);
    taskContainerElement.appendChild(taskElement);
  });
};
const addTask = (task) => {
  tasks.push(task);
};
addButtonElement.addEventListener('click', (event) => {
  event.preventDefault();
  addTask({ title: taskNameInputElement.value, done: false });
  render();
});
render();
