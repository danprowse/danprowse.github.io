// imports
import { timer } from "./timer/timer.js";
import { todos } from "./todos/todos.js";
// constants / variables
const sessionSelectButtons = document.querySelectorAll("[data-time]");
const btnStart = document.querySelector(".btn__start");
const btnStop = document.querySelector(".btn__stop");
const todoAdd = document.querySelector(".todos__add");
// init classes
const Timer = new timer();
const Todos = new todos();
// events
sessionSelectButtons.forEach((button) =>
  button.addEventListener("click", Timer.setTimer)
);
btnStart.addEventListener("click", () => Timer.startTimer());
btnStop.addEventListener("click", () => Timer.resetTimer());
todoAdd.addEventListener("click", () => Todos.addTodo());
