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
document.querySelectorAll('.botao-detalhes').forEach((item, index) => {
  item.addEventListener('click', () => {
    openPopup({
      title: `Item ${index + 1}`,
      description: `Detalhes do item ${index + 1}.`
    });
  });
});

let quantity = 1;
    const quantityDisplay = document.getElementById('quantityValue');
    const decreaseButton = document.getElementById('decreaseQuantity');
    const increaseButton = document.getElementById('increaseQuantity');
    const addToCartButton = document.getElementById('addToCartButton');

    // Função para atualizar o display da quantidade
    function updateQuantityDisplay() {
        quantityDisplay.textContent = quantity;
    }

    // Evento para diminuir a quantidade
    decreaseButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            updateQuantityDisplay();
        }
    });

    // Evento para aumentar a quantidade
    increaseButton.addEventListener('click', () => {
        quantity++;
        updateQuantityDisplay();
    });

    // Evento para adicionar ao carrinho
    addToCartButton.addEventListener('click', () => {
        alert(`Adicionado ${quantity} itens ao carrinho!`);
    });