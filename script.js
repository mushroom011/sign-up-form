const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const signUpForm = document.querySelector('#sign-up-form');

const isPasswordsMatch = () => {
  return passwordInput.value === confirmPasswordInput.value;
}

const handleSubmit = (e) => {
  e.preventDefault();

  if(!isPasswordsMatch()) {
    passwordInput.classList.add('error');
    confirmPasswordInput.classList.add('error');
    passwordInput.nextElementSibling.textContent = '* Passwords do not match';
  } else {
    passwordInput.classList.remove('error');
    confirmPasswordInput.classList.remove('error');
    passwordInput.nextElementSibling.textContent = '';
  }
}

signUpForm.addEventListener('submit', handleSubmit);
