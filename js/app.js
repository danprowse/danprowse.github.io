// imports
import { timer } from "./timer/timer.js";
import { newTodo } from "./todo/todos.js";

// constants / variables
const sessionSelectButtons = document.querySelectorAll("[data-time]");
const btnStart = document.querySelector(".timer__btn-start");
const btnStop = document.querySelector(".timer__btn-stop");

const addTodo = document.querySelector(".todos__add");
const todoInput = document.querySelector(".todos__input");

const Timer = new timer();

// Events
sessionSelectButtons.forEach((button) =>
  button.addEventListener("click", Timer.setTimer)
);
btnStart.addEventListener("click", () => Timer.startTimer());
btnStop.addEventListener("click", () => Timer.resetTimer());

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    newTodo();
  }
});
addTodo.onclick = newTodo;
