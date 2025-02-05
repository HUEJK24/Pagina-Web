// Seleccionamos los radios
const radioSignup = document.querySelector('input[value="signup"]');
const radioLogin  = document.querySelector('input[value="login"]');

// Seleccionamos los formularios
const signupForm = document.getElementById('signupForm');
const loginForm  = document.getElementById('loginForm');

// Al cargar la página, asignamos eventos a los radios
radioSignup.addEventListener('change', () => {
  if (radioSignup.checked) {
    signupForm.classList.remove('hidden');
    signupForm.classList.add('visible');
    loginForm.classList.remove('visible');
    loginForm.classList.add('hidden');
  }
});

radioLogin.addEventListener('change', () => {
  if (radioLogin.checked) {
    loginForm.classList.remove('hidden');
    loginForm.classList.add('visible');
    signupForm.classList.remove('visible');
    signupForm.classList.add('hidden');
  }
});
