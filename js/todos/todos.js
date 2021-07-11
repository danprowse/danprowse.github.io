const todoInput = document.querySelector(".todos__input");
const todoError = document.querySelector(".todos__error");
const todoList = document.querySelector(".todos__list");
let currentTodos = [];
export class todos {
  constructor() {
  }
  addTodo() {
    if (todoInput.value.length == 0) {
      todoError.textContent = "Input is empty";
    } else {
      todoError.textContent = "";
      // TODO: check user input
      let todo = todoInput.value;
      currentTodos.push(todo);
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(todo));
      todoList.appendChild(li);
    }
  }
  deleteTodo() {}
  toggleCompleteTodo() {}
}
