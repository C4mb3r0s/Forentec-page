document.addEventListener('DOMContentLoaded', function() {
  const dateElement = document.getElementById('date');
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('es-ES', options);
  dateElement.textContent = formattedDate;
});