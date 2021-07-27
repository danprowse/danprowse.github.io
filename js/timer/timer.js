import { updateCounters, init, pomCounter } from "./counters.js";

let countdown;
const DEFAULT_POMO_TIMER = 25;
const DEFAULT_LONG_BREAK = 15;
const DEFAULT_SHORT_BREAK = 5;
let selectedTimeInMins = DEFAULT_POMO_TIMER;
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
      this.toggleTimerActiveStyling(selectedTimeInMins);
      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        timerActive = true;

        // check if we need to stop
        if (secondsLeft < 0) {
          clearInterval(countdown);
          updateCounters(selectedTimeInMins);
          this.toggleTimerActiveStyling(selectedTimeInMins);
          timerActive = false;
          if (selectedTimeInMins > DEFAULT_LONG_BREAK) {
            if (pomCounter % 3 === 0) {
              selectedTimeInMins = DEFAULT_LONG_BREAK;
            } else {
              selectedTimeInMins = DEFAULT_SHORT_BREAK;
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
      timerDisplay.textContent = `${
        selectedTimeInMins < 10 ? `0` : ""
      }${selectedTimeInMins}:00`;
    }
  }

  resetTimer() {
    clearInterval(countdown);
    if(timerActive) {
      this.toggleTimerActiveStyling(selectedTimeInMins);
    }
    timerActive = false;
    timerDisplay.textContent = `${
      selectedTimeInMins < 10 ? `0` : ""
    }${selectedTimeInMins}:00`;
  }

  displayTimeLeft(seconds = selectedTimeInMins * 60) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes < 10 ? "0" : ""}${minutes}:${
      remainderSeconds < 10 ? `0` : ""
    }${remainderSeconds}`;
    timerDisplay.textContent = display;
  }

  toggleTimerActiveStyling(mins){
    switch (mins) {
      case 5:
      case 15:
        timerDisplay.classList.toggle("active-break");
        break;
      case 25:
        timerDisplay.classList.toggle("active-pomo");
        break;
    }
  }
}
