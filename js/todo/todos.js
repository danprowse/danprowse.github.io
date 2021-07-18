const todoInput = document.querySelector(".todos__input");
const todoErrorMsg = document.querySelector(".todos__error");
const todoList = document.querySelector(".todos__list");

function newTodo() {
  if (todoInput.value.length == 0) {
    todoErrorMsg.innerHTML =
      'Enter a todo e.g., Book holiday flights <i class="fab fa-telegram-plane"></i>';
  } else {
    // adding task
   todoList.innerHTML += `
              <li>
                ${todoInput.value}
                <i class="fas fa-check complete"></i>
                <i class="fas fa-times delete"></i>
              </li>
      `;
    todoInput.value = "";
    todoErrorMsg.innerHTML = "";
    setTodoListeners();
  }
}

function setTodoListeners() {
  const deleteIcons = document.querySelectorAll(".delete");
  deleteIcons.forEach((icon) => {
    icon.onclick = function () {
      this.parentNode.remove();
    };
  });
  const completeIcons = document.querySelectorAll(".complete");
  completeIcons.forEach((icon) => {
    icon.onclick = function () {
      this.parentNode.classList.toggle("completed");
    };
  });
}

export { newTodo };