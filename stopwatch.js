const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const displayCount = document.getElementById("counter");

let seconds = 0;
let minutes = 0;
let hours = 0; 

let showSeconds = 0;
let showMinutes = 0;
let showHours = 0;

let interval = null;

function counter(){

  seconds++; 

  if(seconds === 60){
    seconds = 0;
    minutes++;
  }
  if(minutes === 60){
    minutes = 0;
    hours++;
  }

  if (hours < 10) {
    showHours = "0" + hours;
  } else {
    showHours = hours;
  }

  if (minutes < 10) {
    showMinutes = "0" + minutes;
  } else {
    showMinutes = minutes;
  }

  if (seconds < 10) {
    showSeconds = "0" + seconds;
  } else {
    showSeconds = seconds;
  }

  displayCount.innerHTML= `${showHours}:${showMinutes}:${showSeconds}`

}

function startTime() {
  interval = window.setInterval(counter, 1000);
  start.style.display = "none";
}

function stop() {
  window.clearInterval(interval);
  start.style.display = "initial"
}

function resetTime() {
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0; 

  displayCount.innerHTML= "00:00:00"
  start.style.display = "initial"

}


start.addEventListener("click", startTime);

pause.addEventListener("click", stop);

reset.addEventListener("click", resetTime);