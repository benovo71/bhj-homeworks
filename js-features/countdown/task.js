const updateTimer = () => {
  let timer = document.getElementById("timer");
  let timerSeconds = Number(timer.textContent);

  if (timerSeconds > 0) {
    timer.textContent = timerSeconds - 1;
  } else {
    clearInterval(startTimer);
    alert("Вы победили в конкурсе!");
    return;
  }
};

const startTimer = setInterval(updateTimer, 1000);
