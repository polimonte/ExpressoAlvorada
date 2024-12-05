document.addEventListener("DOMContentLoaded", () => {
  // Selecionar todos os botões de remoção
  const removeButtons = document.querySelectorAll('.remove-item');

  // Adicionar evento de clique a cada botão
  removeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Prevenir comportamento padrão do link
      const card = button.closest('.card'); // Encontrar o elemento pai mais próximo com classe "card"
      card.remove(); // Remover o cartão do DOM
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Selecionar todos os botões de remoção
  const removeButtons = document.querySelectorAll('.remove-item');

  // Adicionar evento de clique a cada botão
  removeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Prevenir comportamento padrão do link
      const card = button.closest('.card'); // Encontrar o elemento pai mais próximo com classe "card"
      card.remove(); // Remover o cartão do DOM
    });
  });

  const paymentForm = document.getElementById('payment-form');
  const addressForm = document.getElementById('address-form');

  paymentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Pagamento confirmado!');
    // Aqui você pode adicionar lógica para processar o pagamento
  });

  addressForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Endereço salvo!');
    // Aqui você pode adicionar lógica para salvar o endereço
  });
});