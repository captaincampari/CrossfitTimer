import "./styles.css";

document.getElementById("startButton").addEventListener("click", handleStart);
document.getElementById("stopButton").addEventListener("click", handleStop);

let seconds = 3;
let intervalId;

document.getElementById("app").innerHTML = seconds;

function f() {
  seconds = seconds - 1;
  document.getElementById("app").innerHTML = seconds;
  if (seconds == 0) {
    handleStop();
  }
}

function handleStart() {
  intervalId = setInterval(f, 1000);
}

function handleStop() {
  console.log("stopped, yeah");
  clearInterval(intervalId);
}
