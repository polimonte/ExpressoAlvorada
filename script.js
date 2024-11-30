document.getElementById('btnLogin').addEventListener('click', abrirPopup);
document.getElementById('btnCadastar').addEventListener('click', abrirPopup);

function abrirPopup() {
    document.getElementById('popup').style.display = 'block';
}

function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
}

// Funções para processar login e cadastro
function processarLogin(dados) {
    // Implemente a lógica de login aqui
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const senha = this.querySelector('input[type="password"]').value;
    
        processarLogin({ email, senha });
    });
    console.log('Processando login:', dados);
}

function processarCadastro(dados) {
    // Implemente a lógica de cadastro aqui
    document.getElementById('cadastroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = this.querySelector('input[name="nome"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const senha1 = this.querySelector('input[name="senha"]').value;
        const senha2 = this.querySelector('input[name="confirmar-senha"]').value;
    
        if (senha1 !== senha2) {
            alert('As senhas não coincidem!');
            return;
        }
    
        processarCadastar({ nome, email, senha: senha1 });
    });
    console.log('Processando cadastro:', dados);
}