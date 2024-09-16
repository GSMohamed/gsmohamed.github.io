// add event listeners for nav links
document.querySelectorAll('#services nav a').forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.color = '#666';
    });
    link.addEventListener('mouseout', () => {
      link.style.color = '#333';
    });
  });
  
  // add event listeners for images
  document.querySelectorAll('#services img').forEach(image => {
    image.addEventListener('mouseover', () => {
      image.style.transform = 'scale(1.1)';
    });
    image.addEventListener('mouseout', () => {
      image.style.transform = 'scale(1)';
    });
  });
  
  // add event listener for contact button
  document.querySelector('#services #contact-button').addEventListener('click', () => {
    document.querySelector('#services #contact-form').style.display = 'block';
  });
  
  // add event listener for close button
  document.querySelector('#services #close-button').addEventListener('click', () => {
    document.querySelector('#services #contact-form').style.display = 'none';
  });