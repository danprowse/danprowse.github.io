// imports
import { timer } from "./timer/timer.js";

// constants / variables
const sessionSelectButtons = document.querySelectorAll("[data-time]");
const btnStart = document.querySelector(".btn__start");
const btnStop = document.querySelector(".btn__stop");
const addTodo = document.querySelector(".todos__add");

// init classes
const Timer = new timer();
// events
sessionSelectButtons.forEach((button) =>
  button.addEventListener("click", Timer.setTimer)
);
btnStart.addEventListener("click", () => Timer.startTimer());
btnStop.addEventListener("click", () => Timer.resetTimer());

addTodo.onclick = () => {
  if (document.querySelector(".todos__input").value.length == 0) {
    document.querySelector(".todos__error").innerHTML = 'Enter a todo e.g., Book holiday flights <i class="fab fa-telegram-plane"></i>';
  } else {
    // adding task
    document.querySelector(".todos__list").innerHTML += `
            <li>
              ${document.querySelector(".todos__input").value}
              <i class="fas fa-check complete"></i>
              <i class="fas fa-times delete"></i>
            </li>
    `;
  }
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
  document.querySelector(".todos__input").value = "";
};
