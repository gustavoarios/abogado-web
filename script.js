// Formulario
document.getElementById("form-contacto").addEventListener("submit", function(e) {
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
