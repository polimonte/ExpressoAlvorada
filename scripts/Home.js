document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
  
    const itemsToShow = 3; // Número de itens visíveis
    const totalItems = items.length;
    const step = 100 / itemsToShow; // Percentual para cada movimento
    let currentIndex = 0;
  
    const updateCarousel = () => {
      carousel.style.transform = `translateX(${-currentIndex * step}%)`;
    };
  
    nextButton.addEventListener('click', () => {
      if (currentIndex < totalItems - itemsToShow) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    // Ajusta o carrossel ao redimensionar a janela
    window.addEventListener('resize', updateCarousel);
  });
  