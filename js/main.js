document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links');
  var social = document.querySelector('.social');
  
  if (hamburger && navLinks && social) {
    hamburger.addEventListener('click', function() {
      var isOpen = navLinks.classList.toggle('open');
      social.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});