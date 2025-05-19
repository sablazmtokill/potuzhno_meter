const valueDisplay = document.getElementById('value');
const bar = document.getElementById('bar');
const button = document.getElementById('powerBtn');
let potuzhnist = 0;
let interval = null;
let decayInterval = null;
let color = null
let light_range = null // ${color}
let size = 5

function updateUI() {
    valueDisplay.textContent = `пОтужність: ${potuzhnist} ПТЖ`;
    valueDisplay.style.textShadow = `0px 0px ${light_range}px red`;
    valueDisplay.style.fontSize = `${size}px`
}
function start() {
    clearInterval(interval);
    interval = setInterval(function() {
        if (potuzhnist < 100) {
            potuzhnist+=2;
            light_range+=2;
            size+=5
            updateUI();
          }
        }, 150);
      }

function stop() {
    clearInterval(interval);
    interval = setInterval(function() {
    if (potuzhnist > 0) {
        potuzhnist-=2;
        light_range-=2;
        size+=5
        updateUI();
    }}, 150);
}

button.addEventListener("mousedown", start)
button.addEventListener("mouseup", stop)
