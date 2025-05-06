import { getDbAccounts, getCurrentAccount, setCurrentAccount, registerNewAccount } from "./account.js";

if (getCurrentAccount()) window.location.href = '../restaurants.html';

/*
  Login Logic
*/

function isUserRegistered(username, password) {
  for (const account of getDbAccounts()) {
    if (username === account.username && password === account.password) return true;
  }

  return false;
}

const loginUsernameEl = document.querySelector('#login-username');
const loginPasswordEl = document.querySelector('#login-password');
const loginErrorEl = document.querySelector('#login-error');
const loginFormEl = document.querySelector('#login-form');

loginFormEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = loginUsernameEl.value;
  const password = loginPasswordEl.value;

  if (isUserRegistered(username, password)) {
    setCurrentAccount(username);
    console.log('Login successfully');
    window.location.href = '../restaurants.html';
  } else {
    loginErrorEl.innerText = 'Wrong username or password';
  }
});

/*
  Register Logic
*/

const registerUsernameEl = document.querySelector('#register-username');
const registerPasswordEl = document.querySelector('#register-password');
const registerInfoEl = document.querySelector('#register-info');
const registerFormEl = document.querySelector('#register-form');

registerFormEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = registerUsernameEl.value.trim();
  const password = registerPasswordEl.value.trim();

  if (username.length && password.length) {
    registerNewAccount(username, password);
    registerInfoEl.innerText = 'Register successfully';
  } else {
    registerInfoEl.innerText = 'Register failed';
  }
});