document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll('.carousel-container');

  carousels.forEach((carouselContainer) => {
    const carousel = carouselContainer.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const nextButton = carouselContainer.querySelector('.next');
    const prevButton = carouselContainer.querySelector('.prev');

    const itemsToShow = 3;
    const totalItems = items.length;
    const step = 100 / itemsToShow;
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

    window.addEventListener('resize', updateCarousel);
  });

  // Código para o popup
  const exibir = document.querySelector('.exemplo-comida');
  const popupComida = document.querySelector('.popup-comida');
  const popupOverlayComida = document.querySelector('.popup-overlay-comida');

  if (exibir && popupComida && popupOverlayComida) {
    exibir.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('Item de comida clicado!');

      popupComida.style.display = 'block';
      popupOverlayComida.style.display = 'block';
    });

    popupOverlayComida.addEventListener('click', () => {
      popupComida.style.display = 'none';
      popupOverlayComida.style.display = 'none';
    });

    popupComida.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }
});
