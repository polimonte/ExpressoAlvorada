const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  // if (!passwordRegex.test(password)) {
  //   alert("Password must meet all requirements.");
  //   return;
  // }

  // alert("Registration successful!");
  window.location.href = '../index.html';
});