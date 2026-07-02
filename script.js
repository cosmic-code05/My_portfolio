const toggle = document.getElementById('themeToggle');

toggle.addEventListener('click', function() {
  document.body.classList.toggle('light-mode');
  
  if (document.body.classList.contains('light-mode')) {
    toggle.textContent = 'Dark Mode';
  } else {
    toggle.textContent = 'Light Mode';
  }
});