// Dropdown function
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }

  document.addEventListener('click', function(event) {
    const notification = document.querySelector('.notification');
    const dropdown = document.getElementById('dropdown');

    if (!notification.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });