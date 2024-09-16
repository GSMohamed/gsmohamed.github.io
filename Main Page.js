// add event listeners for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.color = '#666';
    });
    link.addEventListener('mouseout', () => {
      link.style.color = '#333';
    });
  });
  
  // add event listeners for images
  document.querySelectorAll('img').forEach(image => {
    image.addEventListener('mouseover', () => {
      image.style.transform = 'scale(1.1)';
    });
    image.addEventListener('mouseout', () => {
      image.style.transform = 'scale(1)';
    });
  });
  
  // add event listener for contact button
  document.querySelector('#contact-button').addEventListener('click', () => {
    document.querySelector('#contact-form').style.display = 'block';
  });
  
  // add event listener for close button
  document.querySelector('#close-button').addEventListener('click', () => {
    document.querySelector('#contact-form').style.display = 'none';
  });