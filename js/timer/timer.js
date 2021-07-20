import { updateCounters, init } from "./counters.js";

let countdown;
const DEFAULT_POMO_TIMER = 25;
let selectedTimeInMins = DEFAULT_POMO_TIMER;
let pomoSessions = 2;
let timerActive = false;
const timerDisplay = document.querySelector(".display__time-left");

export class timer {
  constructor() {
    init();
    this.displayTimeLeft();
  }

  startTimer() {
    // clear and existing timers
    if (!timerActive) {
      clearInterval(countdown);

      const now = Date.now();
      const seconds = selectedTimeInMins * 60;
      const then = now + seconds * 1000;
      this.displayTimeLeft(seconds);

      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        timerActive = true;

        // check if we need to stop
        if (secondsLeft < 0) {
          clearInterval(countdown);
          timerActive = false;
          updateCounters(selectedTimeInMins);
          pomoSessions++;
          // if greater than break amount
          if (selectedTimeInMins > 15) {
            if(pomoSessions % 3 === 0) {
              selectedTimeInMins = 15;
            } else {
              selectedTimeInMins = 5;
            }
          } 
          this.displayTimeLeft();
          return;
        }

        // display it
        this.displayTimeLeft(secondsLeft);
      }, 1000);
    }
  }

  setTimer() {
    if (!timerActive) {
      selectedTimeInMins = this.dataset.time / 60;
      console.log(this.dataset.time / 60);
      timerDisplay.textContent = `${
        selectedTimeInMins < 10 ? `0` : ""
      }${selectedTimeInMins}:00`;
      console.log(selectedTimeInMins);
    }
  }

  resetTimer() {
    clearInterval(countdown);
    timerActive = false;
    timerDisplay.textContent = `${
      selectedTimeInMins < 10 ? `0` : ""
    }${selectedTimeInMins}:00`;
  }

  // display time left
  displayTimeLeft(seconds = selectedTimeInMins * 60) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes < 10 ? "0" : ""}${minutes}:${
      remainderSeconds < 10 ? `0` : ""
    }${remainderSeconds}`;
    timerDisplay.textContent = display;
    console.log({ minutes, remainderSeconds });
  }
}
