import "./styles.css";

document.getElementById("stopButton").addEventListener("click", handleStop);
let intervalId = setInterval(f, 1000);

function f() {
  document.getElementById("app").innerHTML = new Date().getSeconds();
}

function handleStop() {
  console.log("stopped, yeah");
  debugger;
  clearInterval(intervalId);
}
