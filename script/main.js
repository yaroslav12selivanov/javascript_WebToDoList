const formAction = document.querySelector("#form__tasks");
const taskInput = document.querySelector(".task__input");
const activeTasksList = document.querySelector(".active__task__list");
// const finishedTasksList = document.querySelector(".finished__task__list");

let activeTasksNumber = document.querySelector(".active__task__couantity");
let finishedTasksNumber = document.querySelector(".finished__task__couantity");
let tasksArray = [];

// Обработчики событий
formAction.addEventListener("submit", addNewTask);
activeTasksList.addEventListener("click", deleteTask);

// Функции
function addNewTask(elementTask) {
  elementTask.preventDefault(); // Отмена автоматического обновления
  const taskText = taskInput.value;

  const newTaskInfo = {
    id: Date.now(),
    text: taskText,
    date: new Date(),
    done: false
  };
  tasksArray.push(newTaskInfo);

  const refactorCssClass = newTaskInfo.done ? "task__title task__title--done" : "task__title";
  const refactorHtml = `<li class="active__task__item" id="${newTaskInfo.id}">
            <div class="text">
              <span class="${refactorCssClass}">${newTaskInfo.text}</span>
              <span class="task__date">date: ${newTaskInfo.date.getHours()}, year: ${newTaskInfo.date.getFullYear()}</span>
            </div>
            <div class="active__task__item__buttons" data-action="done" type="button">
              <button class="successfully__button">
                <img src="./styles/images/icons/success.svg" alt="success button">
              </button>
              <button class="deleted__button" data-action="delete" type="button">
                <img src="./styles/images/icons/trash.svg" alt="delete button">
              </button>
            </div>
          </li>`;
  activeTasksList.insertAdjacentHTML("beforeend", refactorHtml);
  console.log(newTaskInfo);
  taskInput.value = "";
}

function deleteTask(elementTask) {
  if (elementTask.target.dataset.action === "delete") {
    const parentTask = elementTask.target.closest(".active__task__item");
    // Проверка, что задача действительно есть (равна true) для удаления
    if (parentTask) {parentTask.remove()};
  }
}
