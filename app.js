//Create main container
document.body.innerHTML = `<div id="container"></div>`;

const container = document.getElementById("container");
container.innerHTML =
  `<p class="clock_text">Stopwatch</p><p class="clock_text">00:00</p><button>Star</button><button>Stop</button><button>Reset</button>`;
container.style.height = "500px";
container.style.width = "500px";
container.style.border = "10px solid gray";
container.style.background = "lightgray";
container.style.borderRadius = "30px";
container.style.display = "grid";
container.style.textAlign = "center";
container.style.fontSize = "40px";
container.style.fontWeight = "600";

const clock_text = document.querySelector("clock_text");
clock_text.style.fontSize = "20px";



