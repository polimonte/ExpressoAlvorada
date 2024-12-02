document.getElementById('switchToRegister').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

document.getElementById('switchToLogin').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');

    if (loginButton) {
        loginButton.addEventListener('click', function () {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                // Simulando validação bem-sucedida
                alert('Login bem-sucedido! Redirecionando para a página Home...');
                window.location.href = './pages/Home.html'; // Redireciona para a página Home
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    } else {
        console.error('Botão de login não encontrado.');
    }
});