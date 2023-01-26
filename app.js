//Setup baseline style
const body = document.querySelector("body");
body.style.fontFamily = "Orbitron, sans-serif";

//Watch Digits
const digits = {
  h_seconds: 0,
  t_seconds: 0,
  seconds: 0,
  tSeconds: 0,
  minute: 0, 
  tMinute: 0,
}

let tMin = digits.tMinute;
let min= digits.minute;
let tSec= digits.tSeconds;
let sec= digits.seconds;
let t_sec= digits.t_seconds;
let h_sec= digits.h_seconds;

//Create main container
document.body.innerHTML = `<div id="container"></div>`;

const container = document.getElementById("container");
container.innerHTML = `<div id="watch"><p class="watch_text">fossil</p><p id="watch_time" class="watch_text" >${tMin}${min}:${tSec}${sec}:${t_sec}${h_sec} </p><button class="btn btn--start">Start</button><button class="btn btn--stop">Stop</button><button class="btn btn--reset">Reset</button></div>`;
container.style.height = "500px";
container.style.width = "500px";
container.style.border = "20px solid #afafaf";
container.style.background = "#030303";
container.style.borderRadius = "30px";
container.style.display = "grid";
container.style.textAlign = "center";
container.style.color = "lightblue";
container.style.fontSize = "40px";
container.style.fontWeight = "600";

//Style watch face
const watch = document.getElementById("watch");
watch.style.background = "#2d2c2c";
watch.style.height = "85%";
watch.style.width = "85%";
watch.style.margin = "auto";
watch.style.borderRadius = "20px";

const watch_time = document.getElementById("watch_time");
watch_time.style.fontSize = "70px";

//Style all buttons
let btns = document.querySelectorAll('.btn'), i;
for (i = 0; i < btns.length; ++i) {
  btns[i].style.padding = "3% 8%";
  btns[i].style.cursor = "pointer";
  btns[i].style.background = "none";
  btns[i].style.border = "2px solid lightblue";
  btns[i].style.margin = "0 1%";
  btns[i].style.color = "lightblue";
  btns[i].style.fontSize = "20px";
  btns[i].style.borderRadius = "10px";
}

