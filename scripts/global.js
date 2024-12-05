
// Seleciona o elemento do carrinho
const cartCountElement = document.getElementById('cartCount');

// Adiciona um evento de clique no botão "Add to cart"
document.querySelector('.botao-cart').addEventListener('click', function (e) {
  e.preventDefault(); // Impede o comportamento padrão do link

  // Pega o número atual e incrementa em 1
  let currentCount = parseInt(cartCountElement.textContent.trim());
  cartCountElement.textContent = currentCount + 1;
});