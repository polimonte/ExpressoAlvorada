document.addEventListener('DOMContentLoaded', function () {
  // Seleciona o botão dentro do modal
  const modalButton = document.querySelector('.btn-save');

  if (modalButton) {
      modalButton.addEventListener('click', function () {
          // Redireciona para a página index.html
          window.location.href = '../index.html';
      });
  }
});
