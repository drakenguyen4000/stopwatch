//Setup baseline style
const body = document.querySelector("body");
body.style.fontFamily = "Orbitron, sans-serif";

//Create main container
document.body.innerHTML = `<div id="container"></div>`;

const container = document.getElementById("container");
container.innerHTML = `<div id="watch"><p class="watch_text">fossil</p><p id="watch_time" class="watch_text" >
<span id="tMin">0</span><span id="min">0</span>:<span id="tSec">0</span><span id="sec">0</span>:<span id="t_sec">0</span><span id="h_sec">0</span>
</p><button class="btn btn--start">Start</button><button class="btn btn--stop">Stop</button><button class="btn btn--reset">Reset</button></div>`;
container.style.height = "550px";
container.style.width = "550px";
// container.style.border = "20px solid #afafaf";
// container.style.background = "#030303";
container.style.backgroundImage = "url('./metalbackground.jpg')";
container.style.borderRadius = "30px";
container.style.display = "grid";
container.style.textAlign = "center";
container.style.color = "lightblue";
container.style.fontSize = "40px";
container.style.fontWeight = "600";

//Style watch face
const watch = document.getElementById("watch");
watch.style.border = "20px solid #030303";
// watch.style.background = "#2d2c2c";
watch.style.backgroundImage = "linear-gradient(#2d2c2c, lightgrey)";
watch.style.height = "85%";
watch.style.width = "85%";
watch.style.margin = "auto";
watch.style.borderRadius = "20px";

const watch_time = document.getElementById("watch_time");
watch_time.style.fontSize = "70px";

//Style all buttons
let btns = document.querySelectorAll(".btn"),
  i;
for (i = 0; i < btns.length; ++i) {
  btns[i].style.padding = "3% 8%";
  btns[i].style.cursor = "pointer";
  btns[i].style.background = "none";
  // btns[i].style.border = "2px solid lightblue";
  btns[i].style.margin = "0 1%";
  // btns[i].style.color = "lightblue";
  btns[i].style.fontSize = "20px";
  btns[i].style.borderRadius = "10px";

  let color = "white";
  if (i === 0) {
    color = "#4fc1ff";
  } else if (i === 1) {
    color = "red";
  }
  btns[i].style.border = `2px solid ${color}`;
  btns[i].style.color = `${color}`;
}

btns[0].addEventListener("mouseover", () => {
  btns[0].style.background = "#4fc1ff";
  btns[0].style.color = "white";
});

btns[0].addEventListener("mouseout", () => {
  btns[0].style.background = "none";
  btns[0].style.color = "lightblue";
});

//Used to delay speed of loop
const delay = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

let h_sec = 0;
let t_sec = 0;
let sec = 0;
let tSec = 0;
let min = 0;
let tMin = 0;

const h_secInc = () => {
  if (h_sec < 9) {
    h_sec += 1;
  } else {
    h_sec = 0;
    console.log("h_sec running");
    t_secInc();
  }
};

const t_secInc = () => {
  if (t_sec < 9) {
    t_sec += 1;
  } else {
    t_sec = 0;
    console.log("t_sec running");
    secInc();
  }
};

const secInc = () => {
  if (sec < 9) {
    sec += 1;
  } else {
    sec = 0;
    console.log("sec running");
    tSecInc();
  }
};

const tSecInc = () => {
  if (tSec < 9) {
    tSec += 1;
  } else {
    tSec = 0;
    minInc();
  }
};

const minInc = () => {
  if (min < 9) {
    min += 1;
  } else {
    min = 0;
    tMinInc();
  }
};

const tMinInc = () => {
  if (tMin < 9) {
    tMin += 1;
  } else {
    tMin = 0;
  }
};

const command = async (command) => {
  const status = command;
  console.log(command);
  //hundredth of a second counter
  for (let i = 0; tMin < 9; i++) {
    h_secInc();
    document.getElementById("h_sec").innerText = h_sec;
    document.getElementById("t_sec").innerText = t_sec;
    document.getElementById("sec").innerText = sec;
    document.getElementById("tSec").innerText = tSec;
    document.getElementById("min").innerText = min;
    document.getElementById("tMin").innerText = tMin;
    await delay(100);
  }
};

//Functions
document.querySelector(".btn--start").addEventListener("click", () => {
  command("start");
});

document.querySelector(".btn--stop").addEventListener("click", () => {
  command("stop");
  clearTimeout(delay);
});