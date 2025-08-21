const counter = document.getElementById("clicker__counter");
let counterValue = +counter.textContent;
const cookieImage = document.getElementById("cookie");
let isEnlarged = false;

cookieImage.addEventListener("click", function () {
  counterValue += 1;
  counter.textContent = counterValue;

  if (!isEnlarged) {
    cookieImage.width = 300;
    cookieImage.height = 300;
    isEnlarged = true;
  } else {
    cookieImage.width = 200;
    cookieImage.height = 130;
    isEnlarged = false;
  }
});
