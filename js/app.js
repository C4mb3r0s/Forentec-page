document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('aside .menu a, aside .admin-section a');
  const iframe = document.getElementById('main-frame');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = this.getAttribute('onclick').match(/showContent\('(.+?)'\)/)[1];
      let pageUrl = '';

      if (['catalogos', 'ajustes', 'usuarios', 'cerrar-sesion'].includes(contentId)) {
        pageUrl = `./pages/admin-pages/${contentId}.html`;
      } else {
        pageUrl = `./pages/${contentId}.html`;
      }

      iframe.src = pageUrl;

      // Remove active class from all links
      links.forEach(link => link.parentElement.classList.remove('active'));

      // Add active class to the clicked link
      this.parentElement.classList.add('active');
    });
  });
});