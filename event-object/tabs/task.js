document.addEventListener('DOMContentLoaded', () => {

    const tabNavigations = document.querySelectorAll('.tab__navigation');
    tabNavigations.forEach(navigation => {
        const tabs = navigation.querySelectorAll('.tab');
        const contents = navigation.nextElementSibling.querySelectorAll('.tab__content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('tab_active'));
                contents.forEach(c => c.classList.remove('tab__content_active')); 
                tab.classList.add('tab_active');
                const index = Array.from(tabs).indexOf(tab);                
                contents[index].classList.add('tab__content_active');
            });
        });
    });
});