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

let centiSec = 0;
let deciSec = 0;
let sec = 0;
let decaSec = 0;
let min = 0;
let tMin = 0;

const centiSecInc = () => {
  if (centiSec < 9) {
    centiSec += 1;
  } else {
    centiSec = 0;
    console.log("centiSec running");
    deciSecInc();
  }
};

const deciSecInc = () => {
  if (deciSec < 9) {
    deciSec += 1;
  } else {
    deciSec = 0;
    console.log("deciSec running");
    secInc();
  }
};

const secInc = () => {
  if (sec < 9) {
    sec += 1;
  } else {
    sec = 0;
    console.log("sec running");
    decaSecInc();
  }
};

const decaSecInc = () => {
  if (decaSec < 6) {
    decaSec += 1;
  } else {
    decaSec = 0;
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

let stopTimeout;

const loop = () => {
  stopTimeout = setTimeout(function () {
    console.log(i);
    i++;
    if (i < 599999) {
      loop();
      centiSecInc();
      document.getElementById("centiSec").innerText = centiSec;
      document.getElementById("deciSec").innerText = deciSec;
      document.getElementById("sec").innerText = sec;
      document.getElementById("decaSec").innerText = decaSec;
      document.getElementById("min").innerText = min;
      document.getElementById("tMin").innerText = tMin;
    }
  }, 10);
};

//Functions
document.querySelector(".btn--start").addEventListener("click", () => {
  loop();
});

document.querySelector(".btn--stop").addEventListener("click", () => {
  clearTimeout(stopTimeout);
});

