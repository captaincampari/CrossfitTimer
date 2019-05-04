import "./styles.css";

document.getElementById("stopButton").addEventListener("click", handleStop);
let intervalId = setInterval(f, 1000);

function f() {
  // popase gutta
  document.getElementById("app").innerHTML = new Date();
}

function handleStop() {
  console.log("stop");
  debugger;
  clearInterval(intervalId);
}
