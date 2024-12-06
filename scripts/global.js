
document.addEventListener('DOMContentLoaded', function () {
  // Obtém o contador do carrinho ou inicializa com 0
  let cartCount = parseInt(sessionStorage.getItem('cartCount')) || 0;
  updateCartBadge(cartCount);

  // Função para atualizar o badge do carrinho
  function updateCartBadge(count) {
      const cartBadge = document.querySelector('.cart-icon .badge');
      if (cartBadge) {
          cartBadge.textContent = count > 0 ? count : ''; // Exibe se maior que 0
      }
  }

  // Função para adicionar ao carrinho
  function addToCart() {
      cartCount++;
      sessionStorage.setItem('cartCount', cartCount); // Armazena o novo valor no sessionStorage
      updateCartBadge(cartCount); // Atualiza o badge
  }

  // Adiciona evento de clique a todos os botões "Add to cart"
  const cartButtons = document.querySelectorAll('.botao-cart');
  cartButtons.forEach(button => {
      button.addEventListener('click', function (e) {
          e.preventDefault(); // Evita o comportamento padrão do link/botão
          addToCart(); // Chama a função para incrementar o contador
      });
  });

  // Atualiza o contador se já houver itens
  updateCartBadge(cartCount);
});
