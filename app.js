//Setup baseline style
const body = document.querySelector("body");
body.style.fontFamily = "Orbitron, sans-serif";

//Create main container
document.body.innerHTML = `<div id="container"></div>`;

const container = document.getElementById("container");
container.innerHTML = `<div id="watch"><p  id="watch_title" class="watch_text">fossil</p><p id="watch_time" class="watch_text" >
<span id="tMin">0</span><span id="min">0</span>:<span id="decaSec">0</span><span id="sec">0</span>:<span id="deciSec">0</span><span id="centiSec">0</span>
</p><button class="btn btn--start">Start</button><button class="btn btn--stop">Stop</button><button class="btn btn--reset">Reset</button></div>`;
container.style.height = "550px";
container.style.width = "550px";
// container.style.border = "20px solid #afafaf";
// container.style.background = "#030303";
container.style.backgroundImage = "url('./metalbackground.jpg')";
container.style.borderRadius = "30px";
container.style.display = "grid";
container.style.textAlign = "center";
// container.style.color = "lightblue";
container.style.color = "#89CFF0";
container.style.fontSize = "40px";
container.style.fontWeight = "600";

//Watch Fossil Title
document.getElementById("watch_title").style.fontSize = "50px";
document.getElementById("watch_title").style.color = "orangered";
document.getElementById("watch_title").style.textTransform = "uppercase";

//Style watch face
const watch = document.getElementById("watch");
watch.style.border = "20px solid #030303";
// watch.style.background = "#2d2c2c";
watch.style.backgroundImage =
  "linear-gradient(45deg, black, #2d2c2c, lightgrey)";
watch.style.height = "85%";
watch.style.width = "85%";
watch.style.margin = "auto";
watch.style.borderRadius = "20px";

//Watch digits
const watch_time = document.getElementById("watch_time");
watch_time.style.fontSize = "70px";

//CentiSeconds Modified size
document.getElementById("centiSec").style.fontSize = "50px";

//Style all buttons
let btns = document.querySelectorAll(".btn"),
  i;
let color;
for (i = 0; i < btns.length; ++i) {
  btns[i].style.padding = "3% 8%";
  btns[i].style.cursor = "pointer";
  btns[i].style.background = "none";
  // btns[i].style.border = "2px solid lightblue";
  btns[i].style.margin = "0 1%";
  // btns[i].style.color = "lightblue";
  btns[i].style.fontSize = "20px";
  btns[i].style.borderRadius = "10px";

  color = "white";
  if (i === 0) {
    color = "#4fc1ff"; //blue
  } else if (i === 1) {
    color = "red";
  }
  btns[i].style.border = `2px solid ${color}`;
  btns[i].style.color = `${color}`;
}

//Highlight Start button
btns[0].addEventListener("mouseover", () => {
  btns[0].style.background = "#4fc1ff";
  btns[0].style.color = "white";
});

//Remove Highlight Start button
btns[0].addEventListener("mouseout", () => {
  btns[0].style.background = "none";
  btns[0].style.color = "lightblue";
});

//Highlight Stop button
btns[1].addEventListener("mouseover", () => {
  btns[1].style.background = "#FA8072";
  btns[1].style.color = "white";
});

//Remove Highlight Stop button
btns[1].addEventListener("mouseout", () => {
  btns[1].style.background = "none";
  btns[1].style.color = "red";
});

//Highlight Reset button
btns[2].addEventListener("mouseover", () => {
  btns[2].style.background = "lightgrey";
  btns[2].style.color = "black";
});

//Remove Highlight Reset button
btns[2].addEventListener("mouseout", () => {
  btns[2].style.background = "none";
  btns[2].style.color = "white";
});

//Digits control
let centiSec = 0;
let deciSec = 0;
let sec = 0;
let decaSec = 0;
let min = 0;
let tMin = 0;

//Centisecond 1/100 of a second (smallest digit)
const centiSecInc = () => {
  if (centiSec < 9) {
    centiSec += 1;
  } else {
    centiSec = 0;
    deciSecInc();
  }
};

//Decisecond 1/10 of a second
const deciSecInc = () => {
  if (deciSec < 9) {
    deciSec += 1;
  } else {
    deciSec = 0;
    secInc();
  }
};

//Second
const secInc = () => {
  if (sec < 9) {
    sec += 1;
  } else {
    sec = 0;
    decaSecInc();
  }
};

//Decasecond 
const decaSecInc = () => {
  if (decaSec < 6) {
    decaSec += 1;
  } else {
    decaSec = 0;
    minInc();
  }
};

//Minute
const minInc = () => {
  if (min < 9) {
    min += 1;
  } else {
    min = 0;
    tMinInc();
  }
};

//Tens of minute
const tMinInc = () => {
  if (tMin < 9) {
    tMin += 1;
  } else {
    tMin = 0;
  }
};

//Updates Digits on Screen
const refreshDom = () => {
  document.getElementById("centiSec").innerText = centiSec;
  document.getElementById("deciSec").innerText = deciSec;
  document.getElementById("sec").innerText = sec;
  document.getElementById("decaSec").innerText = decaSec;
  document.getElementById("min").innerText = min;
  document.getElementById("tMin").innerText = tMin;
};

let stopTimeout; //Pause time
let j = 0;

const loop = () => {
  stopTimeout = setTimeout(function () {
    console.log(j);
    j++;
    if (j < 599999) {
      loop();
      centiSecInc();
      refreshDom();
    }
  }, 10);
};

//Functions
//Starts clock
document.querySelector(".btn--start").addEventListener("click", () => {
  loop();
});

//Stops clock
document.querySelector(".btn--stop").addEventListener("click", () => {
  clearTimeout(stopTimeout);
});

//Resets clock
document.querySelector(".btn--reset").addEventListener("click", () => {
  clearTimeout(stopTimeout);
  centiSec = 0;
  deciSec = 0;
  sec = 0;
  decaSec = 0;
  min = 0;
  tMin = 0;
  j = 0;
  refreshDom();
});
