document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const progress = document.getElementById("progress");
  const sendButton = document.getElementById("send");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();

    xhr.open(
      "POST",
      "https://students.netoservices.ru/nestjs-backend/upload",
      true
    );

    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) {
        const percentComplete = event.loaded / event.total;
        progress.value = percentComplete;
      }
    });

    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        console.log("Файл успешно загружен");
      } else {
        console.error("Ошибка загрузки:", xhr.statusText);
      }
    };

    xhr.onerror = () => {
      console.error("Ошибка при отправке запроса");
    };

    xhr.send(formData);
  });
});
