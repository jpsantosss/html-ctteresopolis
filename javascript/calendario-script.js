const tooltip = document.querySelector('.tooltip');
const diasEvento = document.querySelectorAll('.day.event');

diasEvento.forEach((diaEvento) => {
  diaEvento.addEventListener('mouseenter', (event) => {
    const eventoNome = event.target.getAttribute('nome-evento');
    tooltip.innerText = eventoNome;
    tooltip.style.display = 'block';
  });
  diaEvento.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none'
  });
  diaEvento.addEventListener('mousemove', (event) => {
    tooltip.style.left = event.pageX + 15 + 'px';
    tooltip.style.top = event.pageY + 15 + 'px';
  });
});
