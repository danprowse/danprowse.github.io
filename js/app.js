// imports
import { timer } from "./timer/timer.js";

// constants / variables
// timer
const Timer = new timer();
const buttons = document.querySelectorAll("[data-time]");
const btnStart = document.querySelector('.btn__start');
const btnStop = document.querySelector('.btn__stop');

// events
buttons.forEach(button => button.addEventListener('click', Timer.setTimer));
btnStart.addEventListener('click', () => Timer.startTimer());
btnStop.addEventListener('click', () => Timer.resetTimer());

Timer.displayTimeLeft();