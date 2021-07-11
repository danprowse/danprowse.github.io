import { listComponent } from "./todo-list-component.js";
const todoInput = document.querySelector(".todos__input");
const todoError = document.querySelector(".todos__error");
const todoList = document.querySelector(".todos__list");
let currentTodos = [];
export class todos {
  constructor() {}
  addTodo() {
    if (todoInput.value.length == 0) {
      todoError.textContent = "Input is empty";
    } else {
      todoError.textContent = "";
      // TODO: check user input
      let todo = todoInput.value;
      currentTodos.push(todo);
      const li = listComponent(todo);
      todoList.innerHTML += li;
      todoInput.value = '';
    }
  }
  deleteTodo() {
      console.log('delete todo')
  }
  toggleCompleteTodo() {
      console.log('complete todo')
  }
}
