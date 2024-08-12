document.querySelectorAll('.accordion-230060004').forEach(button => {
  button.addEventListener('click', () => {
      button.classList.toggle('active');
      const panel = button.nextElementSibling;
      if (button.classList.contains('active')) {
          panel.style.display = 'block';
      } else {
          panel.style.display = 'none';
      }
  });
});