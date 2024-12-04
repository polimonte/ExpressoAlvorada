
// document.addEventListener('DOMContentLoaded', function () {
//     const loginButton = document.getElementById('loginButton');

//     if (loginButton) {
//         loginButton.addEventListener('click', function () {
//             const email = document.getElementById('email').value;
//             const password = document.getElementById('password').value;

//             if (email && password) {
//                 // Simulando validação bem-sucedida
//                 alert('Login bem-sucedido! Redirecionando para a página Home...');
//                 window.location.href = './pages/Home.html'; // Redireciona para a página Home
//             } else {
//                 alert('Por favor, preencha todos os campos.');
//             }
//         });
//     } else {
//         console.error('Botão de login não encontrado.');
//     }
// });


// Redirecionamento para página de login
document.getElementById('loginButton').addEventListener('click', function () {
    window.location.href = './pages/Home.html'; // Substitua 'login.html' pelo URL da página desejada.
});

//Redirecionamento para a página de criação de conta
document.getElementById('createAccountButton').addEventListener('click', function () {
    window.location.href = './pages/Cadastro.html'; // Substitua 'create-account.html' pelo URL da página desejada.
});
