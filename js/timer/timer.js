let countdown;
const DEFAULT_POMO_TIMER = 25;
let selectedTimeInMins = DEFAULT_POMO_TIMER;
let timerActive = false;
let pomCounter = 0;
let breakCounter = 0;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__time-end");
const pomoCounterUI = document.querySelector(".pomo-counter");
const breakCounterUI = document.querySelector(".break-counter");

export class timer {
  constructor() {
    pomoCounterUI.textContent = pomCounter;
    breakCounterUI.textContent = breakCounter;
  }

  startTimer() {
    // clear and existing timers
    if(!timerActive) {
      clearInterval(countdown);
  
      const now = Date.now();
      const seconds = selectedTimeInMins * 60;
      const then = now + seconds * 1000;
      this.displayTimeLeft(seconds);
  
      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we need to stop
        timerActive = true;
        if (secondsLeft < 0) {
          clearInterval(countdown);
          timerActive = false;
          this.updateCounters();
          if(selectedTimeInMins > 15) {
            selectedTimeInMins = 5;
          } else {
            selectedTimeInMins = 25;
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
    if(timerActive) {
      // implement modal
      prompt("Do you wish to change and stop your current session?");
    }
    selectedTimeInMins = this.dataset.time / 60;
    timerDisplay.textContent = `${
      selectedTimeInMins < 10 ? `0` : ""
    }${selectedTimeInMins}:00`;
    console.log(selectedTimeInMins);
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

  updateCounters() {
    switch(selectedTimeInMins) {
      case 5:
      case 15:
        ++breakCounter;
        breakCounterUI.textContent = breakCounter;
        break;
      case 25:
        ++pomCounter
        pomoCounterUI.textContent = pomCounter;
        break;
    }
  }
}
