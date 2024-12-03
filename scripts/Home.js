/* ---------------------------------------- */
/* Carrossel                                */
/* ---------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const carrossel = document.querySelector('.carrossel');
  const items = document.querySelectorAll('.carrossel-item');
  const prevButton = document.querySelector('.carrossel-button.prev');
  const nextButton = document.querySelector('.carrossel-button.next');
  const itemWidth = items[0]?.offsetWidth + 20 || 0; // largura do item + margem (ajuste se necessário)
  let currentIndex = 0;

  // Função para mover o carrossel
  function moveCarrossel(index) {
    carrossel.style.transform = `translateX(${-index * itemWidth}px)`;
  }

  // Eventos dos botões
  prevButton?.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    moveCarrossel(currentIndex);
  });

  nextButton?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    moveCarrossel(currentIndex);
  });
});

/* ---------------------------------------- */
/* Popup de Detalhes de Comida              */
/* ---------------------------------------- */
const popup = document.querySelector('.popup-comida');
const overlay = document.querySelector('.popup-overlay-comida');
const closePopupButton = popup?.querySelector('button.close-popup');

// Função para abrir o popup
function openPopup(content) {
  popup.querySelector('h2').textContent = content.title || 'Detalhes da Comida';
  popup.querySelector('p').textContent = content.description || 'Informações adicionais aqui.';
  popup.style.display = 'block';
  overlay.style.display = 'block';
}

// Função para fechar o popup
function closePopup() {
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

// Eventos para fechar o popup
closePopupButton?.addEventListener('click', closePopup);
overlay?.addEventListener('click', closePopup);

// Exemplo de uso do popup
document.querySelectorAll('.carrossel-item').forEach((item, index) => {
  item.addEventListener('click', () => {
    openPopup({
      title: `Item ${index + 1}`,
      description: `Detalhes do item ${index + 1}.`
    });
  });
});

/* ---------------------------------------- */
/* Ajuste Automático do Carrossel           */
/* ---------------------------------------- */
window.addEventListener('resize', () => {
  const carrossel = document.querySelector('.carrossel');
  const items = document.querySelectorAll('.carrossel-item');
  const itemWidth = items[0]?.offsetWidth + 20 || 0; // largura do item + margem
  const currentIndex = Math.round(
    Math.abs(parseFloat(getComputedStyle(carrossel).transform.split(',')[4]) / itemWidth)
  );

  // Reajusta a posição do carrossel após o resize
  carrossel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
});
