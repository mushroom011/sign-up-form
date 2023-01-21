const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const errorTextSpan = document.querySelector('#error-text');
const signUpForm = document.querySelector('#sign-up-form');

const isPasswordsMatch = () => {
  return passwordInput.value === confirmPasswordInput.value;
}

const passwordsLengthCheck = () => {
  return passwordInput.value < 8 || confirmPasswordInput.value < 8;
}

const handleSubmit = (e) => {
  e.preventDefault();

  if(!isPasswordsMatch()) {
    passwordInput.classList.add('error');
    confirmPasswordInput.classList.add('error');
    errorTextSpan.textContent = '* Passwords do not match';
  } else {
    passwordInput.classList.remove('error');
    confirmPasswordInput.classList.remove('error');
    errorTextSpan.textContent = '';
  }
}

signUpForm.addEventListener('submit', handleSubmit);
