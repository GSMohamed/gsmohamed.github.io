// add event listeners for nav links
document.querySelectorAll('#contact nav a').forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.color = '#666';
    });
    link.addEventListener('mouseout', () => {
      link.style.color = '#333';
    });
  });
  
  // add event listeners for images
  document.querySelectorAll('#contact img').forEach(image => {
    image.addEventListener('mouseover', () => {
      image.style.transform = 'scale(1.1)';
    });
    image.addEventListener('mouseout', () => {
      image.style.transform = 'scale(1)';
    });
  });