import {
  getDbAccounts,
  getCurrentAccount,
  setCurrentAccount,
  registerNewAccount
} from "./account.js";

// Redirect jika sudah login
if (getCurrentAccount()) window.location.href = 'restaurants.html';

document.addEventListener("DOMContentLoaded", () => {
  /*
    Show modal logic
  */
  const showModalLoginButtonEl = document.querySelector('.show-modal-login');
  const showModalRegisterButtonEl = document.querySelector('.show-modal-register');
  const modalLoginEl = document.querySelector('.modal-login');
  const modalRegisterEl = document.querySelector('.modal-register');
  const closeModalLoginButtonEl = document.querySelector('#close-modal-login');
  const closeModalRegisterButtonEl = document.querySelector('#close-modal-register');

  showModalLoginButtonEl?.addEventListener('click', () => {
    modalLoginEl.classList.remove('hidden');
    modalRegisterEl.classList.add('hidden');
  });

  showModalRegisterButtonEl?.addEventListener('click', () => {
    modalRegisterEl.classList.remove('hidden');
    modalLoginEl.classList.add('hidden');
  });

  closeModalLoginButtonEl?.addEventListener('click', () => {
    modalRegisterEl.classList.add('hidden');
    modalLoginEl.classList.add('hidden');
  });

  closeModalRegisterButtonEl?.addEventListener('click', () => {
    modalRegisterEl.classList.add('hidden');
    modalLoginEl.classList.add('hidden');
  });

  /*
    Login Logic
  */
  function isUserRegistered(username, password) {
    return getDbAccounts().some(account => 
      account.username === username && account.password === password
    );
  }

  const loginFormEl = document.querySelector('#login-form');
  const loginUsernameEl = document.querySelector('#login-username');
  const loginPasswordEl = document.querySelector('#login-password');
  const loginErrorEl = document.querySelector('#login-error');

  loginFormEl?.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = loginUsernameEl.value.trim();
    const password = loginPasswordEl.value.trim();

    if (isUserRegistered(username, password)) {
      setCurrentAccount(username);
      window.location.href = 'restaurants.html';
    } else {
      loginErrorEl.innerText = 'Wrong username or password';
      loginUsernameEl.value = '';
      loginPasswordEl.value = '';
    }
  });

  /*
    Register Logic
  */
  const registerFormEl = document.querySelector('#register-form');
  const registerUsernameEl = document.querySelector('#register-username');
  const registerPasswordEl = document.querySelector('#register-password');
  const registerInfoEl = document.querySelector('#register-info');

  registerFormEl?.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = registerUsernameEl.value.trim();
    const password = registerPasswordEl.value.trim();

    if (username && password) {
      registerNewAccount(username, password);
      registerInfoEl.innerText = 'Register successfully';
    } else {
      registerInfoEl.innerText = 'Register failed';
    }

    registerUsernameEl.value = '';
    registerPasswordEl.value = '';
  });
});
