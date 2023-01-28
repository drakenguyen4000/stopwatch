//Setup baseline style
const body = document.querySelector("body");
body.style.fontFamily = "Orbitron, sans-serif";

//Create main container
document.body.innerHTML = `<div id="container"></div>`;

const container = document.getElementById("container");
container.innerHTML = `<div id="watch"><p class="watch_text">fossil</p><p id="watch_time" class="watch_text" >
<span id="tMin">0<span><span id="min">0<span>:<span id="tSec">0<span><span id="sec">0<span>:<span id="t_sec">0<span><span id="h_sec">0<span></p><button class="btn btn--start">Start</button><button class="btn btn--stop">Stop</button><button class="btn btn--reset">Reset</button></div>`;
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
let btns = document.querySelectorAll(".btn"),
  i;
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

//Used to delay speed of loop
const delay = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

//Functions
document.querySelector(".btn--start").addEventListener("click", async () => {
  //hundredth of a second counter
  let h_sec = 0;
  for (let i = 0; i < 10; i++) {
    if (h_sec < 9) {
      h_sec += 1;
    } else {
      h_sec = 0;
    }
    document.getElementById("h_sec").innerText = h_sec;
    await delay(100)
  }
  //The second digit increases to 1 the first digital increases to 10
});
