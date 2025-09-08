document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.has-tooltip');
  let activeTooltip = null;

  elements.forEach(element => {
    element.addEventListener('click', (event) => {
      event.preventDefault(); 
      
      if (activeTooltip && activeTooltip.parentElement !== element) {
        activeTooltip.classList.remove('tooltip_active');
        activeTooltip.remove();
        activeTooltip = null;
      }
      
      const existingTooltip = element.querySelector('.tooltip');
      if (existingTooltip) {
        existingTooltip.classList.toggle('tooltip_active');
        activeTooltip = existingTooltip.classList.contains('tooltip_active') ? existingTooltip : null;
        return;
      }

      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip tooltip_active';
      tooltip.textContent = element.title;

      const rect = element.getBoundingClientRect();
      tooltip.style.position = 'absolute';
      tooltip.style.left = `${rect.left + window.scrollX}px`;
      tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`; 

      element.appendChild(tooltip);
      activeTooltip = tooltip;
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('has-tooltip') && activeTooltip) {
      activeTooltip.classList.remove('tooltip_active');
      activeTooltip.remove();
      activeTooltip = null;
    }
  });
});