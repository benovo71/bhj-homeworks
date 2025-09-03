document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');


        valueElement.addEventListener('click', () => {
            list.classList.toggle('dropdown__list_active');
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    const otherList = otherDropdown.querySelector('.dropdown__list');
                    otherList.classList.remove('dropdown__list_active');
                }
            });
        });

        items.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault(); 
                const link = item.querySelector('.dropdown__link');
                valueElement.textContent = link.textContent; 
                list.classList.remove('dropdown__list_active'); 
            });
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                const list = dropdown.querySelector('.dropdown__list');
                list.classList.remove('dropdown__list_active');
            });
        }
    });
});