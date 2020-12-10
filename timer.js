let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("second");

let startTimer = null;

function timer() {
  //Countdown
  if(h.value == 0 && m.value == 0 && s.value == 0){
    h.value = 0;
    m.value = 0;
    s.value = 0;
  } else if(s.value != 0){
    s.value--;
  } else if(m.value != 0 && s.value == 0) {
    s.value = 59;
    m.value--;
  }else if(h.value != 0 && m.value == 0) {
    m.value = 60;
    h.value--;
  }
}

function resetTimer(){
  clearInterval(startTimer);
}


const displayTimer = document.getElementById("display-timer");

const startBtn = document.getElementById("startbtn");
const resetBtn = document.getElementById("resetbtn");



startBtn.addEventListener("click", function() {
  function startInterval(){
    startTimer = setInterval(function(){
      timer();
    }, 1000);
  }
  startInterval();
});

resetBtn.addEventListener("click", () => {
  h.value = "hr";
  m.value = "min";
  s.value = "sec";

  resetTimer()
});
