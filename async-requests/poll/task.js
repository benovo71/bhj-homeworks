const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    const dataTitle = data.data.title;
    const dataAnswers = data.data.answers;

    console.log(data);

    function displayData() {
      pollTitle.textContent = dataTitle;
      dataAnswers.forEach((answer) => {
        const answerBtn = document.createElement("button");
        answerBtn.className = "poll__answer";
        answerBtn.textContent = answer;
        answerBtn.addEventListener("click", () => {
          alert("Спасибо, ваш голос засчитан!");
        });

        pollAnswers.appendChild(answerBtn);
      });
    }
    displayData();
  }
};
xhr.send();
