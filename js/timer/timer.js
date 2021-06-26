let countdown;
let selectedTime = 25;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__time-end");

export class timer {
  constructor() {}

  startTimer() {
    // clear and existing timers
    clearInterval(countdown);

    const now = Date.now();
    const seconds = selectedTime * 60;
    const then = now + seconds * 1000;
    this.displayTimeLeft(seconds);
    // displayEndTime(then);
    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      // check if we need to stop
      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }
      // display it
      this.displayTimeLeft(secondsLeft);
    }, 1000);
  }

  setTimer() {
    selectedTime = this.dataset.time / 60;
    timerDisplay.textContent = `${
      selectedTime < 10 ? `0` : ""
    }${selectedTime}:00`;
    console.log(selectedTime);
  }

  resetTimer() {
    clearInterval(countdown);
    timerDisplay.textContent = `${
      selectedTime < 10 ? `0` : ""
    }${selectedTime}:00`;
  }

  // display time left
  displayTimeLeft(seconds = (selectedTime * 60)) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes < 10 ? "0" : ""}${minutes}:${
      remainderSeconds < 10 ? `0` : ""
    }${remainderSeconds}`;
    timerDisplay.textContent = display;
    console.log({ minutes, remainderSeconds });
  }
}
