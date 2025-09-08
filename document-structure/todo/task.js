document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('tasks__form');
  const input = document.getElementById('task__input');
  const tasksList = document.getElementById('tasks__list');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const taskText = input.value.trim();
    if (taskText) {
      const task = document.createElement('div');
      task.className = 'task';
      task.innerHTML = `
        <div class="task__title">${taskText}</div>
        <a href="#" class="task__remove">&times;</a>
      `;

      
      const removeButton = task.querySelector('.task__remove');
      removeButton.addEventListener('click', (event) => {
        event.preventDefault();
        task.remove();
      });

      tasksList.appendChild(task);

      input.value = '';
    }
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      form.dispatchEvent(new Event('submit')); 
    }
  });
});