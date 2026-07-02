const toggle = document.getElementById('themeToggle');

toggle.addEventListener('click', function() {
  document.body.classList.toggle('light-mode');
  
  if (document.body.classList.contains('light-mode')) {
    toggle.textContent = 'Dark Mode';
  } else {
    toggle.textContent = 'Light Mode';
  }
});

const words = ['Frontend Developer.', 'UI Enthusiast.', 'Problem Solver.'];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const word = words[wordIndex];
  
  if (!deleting) {
    document.querySelector('#hero h1').textContent = word.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === word.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    document.querySelector('#hero h1').textContent = word.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(type, deleting ? 60 : 100);
}

type();

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(section);
});