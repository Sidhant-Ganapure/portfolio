document.addEventListener("DOMContentLoaded", () => {
  const navbarLinks = document.querySelectorAll('.navbar a');
  navbarLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
  });
});

function smoothScroll(e) {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);
  targetSection.scrollIntoView({ behavior: 'smooth' });
}