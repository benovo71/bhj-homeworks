const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function resetGame() {
  dead.textContent = "0";
  lost.textContent = "0";
}

function checkGame() {
  if (parseInt(dead.textContent) >= 10) {
    alert("Победа! Вы убили 10 кротов!");
    resetGame();
  } else if (parseInt(lost.textContent) >= 5) {
    alert("Поражение! Вы пропустили 5 кротов!");
    resetGame();
  }
}

for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);
  hole.onclick = function () {
    if (hole.classList.contains("hole_has-mole")) {
      dead.textContent = parseInt(dead.textContent) + 1;
    } else {
      lost.textContent = parseInt(lost.textContent) + 1;
    }
    checkGame();
  };
}
