// Add smooth scrolling to the navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Fade in sections when they come into view
  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.5
    };
  
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  