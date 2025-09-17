// Formulario
document.getElementById("form-contacto").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("¡Tu consulta fue enviada! (acá iría la integración con EmailJS)");
});


// Scroll suave para el nav
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // evita el salto instantáneo
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

//Botón para volver arriba


const scrollBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});