// imports
import { timer } from "./timer/timer.js";

// constants / variables
const sessionSelectButtons = document.querySelectorAll("[data-time]");
const btnStart = document.querySelector('.btn__start');
const btnStop = document.querySelector('.btn__stop');
// timer
const Timer = new timer();

// events
sessionSelectButtons.forEach(button => button.addEventListener('click', Timer.setTimer));
btnStart.addEventListener('click', () => Timer.startTimer());
btnStop.addEventListener('click', () => Timer.resetTimer());