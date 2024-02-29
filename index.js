const display = document.getElementById("display");
let timer = null; //no value
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
  console.log(timer);
}
function stop() {
  if (isRunning) {
    clearInterval(timer); //fcn for stoping the running timer
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}
function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}
function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime; //elapsed time it will be in milisec

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let miliseconds = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, "0"); //padStart is a method that adds 0 for the first 2 digits
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  miliseconds = String(miliseconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}

