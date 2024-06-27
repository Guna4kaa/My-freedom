// Задание 1
document.addEventListener('DOMContentLoaded', function() {
    const imageLinks = document.querySelectorAll('.image-link');
    let selectedImageId = localStorage.getItem('selectedImageId');
  
    if (selectedImageId) {
      const selectedImage = document.getElementById(selectedImageId);
      if (selectedImage) {
        selectedImage.classList.add('selected');
        document.body.style.backgroundImage = `url(${selectedImage.querySelector('img').src})`;
        document.body.style.backgroundSize = 'cover';
      }
    }
  
    imageLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        const selectedImageId = this.id;
        const selectedImage = document.getElementById(selectedImageId);
  
        if (selectedImage) {
          // Remove 'selected' class from all links
          imageLinks.forEach(function(link) {
            link.classList.remove('selected');
          });
  
          // Add 'selected' class to the clicked link
          selectedImage.classList.add('selected');
  
          // Update body background
          const imageUrl = selectedImage.querySelector('img').src;
          document.body.style.backgroundImage = `url(${imageUrl})`;
          document.body.style.backgroundSize = 'cover';
  
          // Save selected image ID to localStorage
          localStorage.setItem('selectedImageId', selectedImageId);
        }
      });
    });
  });
  