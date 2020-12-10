const date = document.getElementById("date");
const time = document.getElementById("time");

//GET YEAR, MONTH, DAY
function allDate(){
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1; 
  const day = newDate.getDate();
  date.innerHTML = `${year}/${month}/${day}`;
}

allDate();

//GET HOUR, MINUTE, SECONDS
function allTime(){
const newTime = new Date();
let hour = newTime.getHours();
let minute = newTime.getMinutes();
let seconds = newTime.getSeconds();

if (hour < "10") {
  hour = "0" + hour;
}
if (minute < "10") {
  minute = "0" + minute;
}
if (seconds < "10") {
  seconds = "0" + seconds;
}

time.innerHTML = `${hour}:${minute}:${seconds}`;
setInterval(allTime, 1000);
}

allTime();

