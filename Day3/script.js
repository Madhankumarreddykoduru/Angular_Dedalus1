let countdown = 30;
let countdownInterval;

function updateTimer() {
  document.getElementById("timer").innerHTML = countdown;
  
  if (countdown === 0) {
    clearInterval(countdownInterval);
    displayGif();
  } else {
    countdown--;
  }
}

function displayGif() {
  document.getElementById("gif").src = "gif1.gif";
  document.getElementById("gif").style.display = "block";
}

countdownInterval = setInterval(updateTimer, 1000);
