let lapbtn=document.querySelector(".lap-btn")
let laplist=document.querySelector(".lap-list")
let startBtn = document.querySelector(".start-btn");
let pauseBtn = document.querySelector(".pause-btn");
let resetBtn = document.querySelector(".reset-btn");
let stopwatch = document.querySelector(".stopwatch");

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let intervalId = null;

const updateStopwatch = () => {
  milliseconds += 1;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds += 1;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
  }
  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
  
  stopwatch.textContent = `${h}:${m}:${s}:${ms}`;
};

// Laps
lapbtn.addEventListener("click", ()=>{
    let lapitems=stopwatch.textContent
    // console.log(lapitems);
    let li=document.createElement("li")
    li.textContent=lapitems
    laplist.appendChild(li)
})

// Start the stopwatch
startBtn.addEventListener("click", () => {
  if (!intervalId) {  // Only start if not already running
    intervalId = setInterval(updateStopwatch, 10);
    startBtn.style.display = "none";  // Hide "Start" button
    pauseBtn.style.display = "inline";  // Show "Pause" button
  }
});

// Pause the stopwatch
pauseBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  startBtn.style.display = "inline";  // Show "Start" button
  pauseBtn.style.display = "none";  // Hide "Pause" button
});

// Reset the stopwatch
resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  stopwatch.textContent = "00:00:00:00";
  intervalId = null;
  laplist.textContent=""
  startBtn.style.display = "inline";  // Show "Start" button
  pauseBtn.style.display = "none";  // Hide "Pause" button
});
