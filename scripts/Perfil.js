function adicionarItem(tipo) {
  alert(`Inserir novo item no tópico: ${tipo}`);
}

function editarItem(tipo) {
  alert(`Editar informações de: ${tipo}`);
}

function apagarItem(tipo) {
  const confirmacao = confirm(`Tem certeza que deseja apagar o item: ${tipo}?`);
  if (confirmacao) {
      alert(`${tipo} apagado com sucesso!`);
  }
}