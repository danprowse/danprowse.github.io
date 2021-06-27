const pomoCounterUI = document.querySelector(".pomo-counter");
const breakCounterUI = document.querySelector(".break-counter");
let pomCounter = 0;
let breakCounter = 0;

function init() {
  pomoCounterUI.textContent = pomCounter;
  breakCounterUI.textContent = breakCounter;
}
function updateCounters(minutes = 0) {
  switch (minutes) {
    case 5:
    case 15:
      ++breakCounter;
      breakCounterUI.textContent = breakCounter;
      break;
    case 25:
      ++pomCounter;
      pomoCounterUI.textContent = pomCounter;
      break;
  }
}

export { updateCounters, init };
