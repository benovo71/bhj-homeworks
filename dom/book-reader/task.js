document.querySelectorAll('.font-size').forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); 

    document.querySelectorAll('.font-size').forEach(btn => {
      btn.classList.remove('font-size_active');
    });

    button.classList.add('font-size_active');
    const book = document.getElementById('book');
    book.classList.remove('book_fs-small', 'book_fs-big');
    const size = button.dataset.size;

    if (size === 'small') {
      book.classList.add('book_fs-small');
    } else if (size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});