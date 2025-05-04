import { accounts, currentAccount, setCurrentAccount } from "./account.js";

if (currentAccount) window.location.href = '../restaurants.html';

/*
  Login Logic
*/

function isUserRegistered(username, password) {
  for (const account of accounts) {
    if (username === account.username && password === account.password) {
      return true;
    }
  }

  return false;
}

const usernameEl = document.querySelector('#login-username');
const passwordEl = document.querySelector('#login-password');
const loginButtonEl = document.querySelector('#login-button');
const loginErrorEl = document.querySelector('#login-error');

loginButtonEl.addEventListener('click', (event) => {
  const username = usernameEl.value;
  const password = passwordEl.value;

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

