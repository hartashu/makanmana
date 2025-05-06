export const accounts = JSON.parse(localStorage.getItem('accounts')) || [{
  username: 'hartashu',
  password: '111'
}, {
  username: 'nexcarlos',
  password: '222'
}, {
  username: 'tanboy',
  password: '333'
}, {
  username: 'mgdalenaf',
  password: '444'
}, {
  username: 'ombotak',
  password: '555'
}];

export let currentAccount = localStorage.getItem('currentAccount');

export function setCurrentAccount(account) {
  currentAccount = account;
  localStorage.setItem('currentAccount', account);
}

export function removeCurrentAccount() {
  currentAccount = undefined;
  localStorage.removeItem('currentAccount');
}

export function saveAccountsToDatabase() {
  localStorage.setItem('accounts', JSON.stringify(accounts));
}

export function registerNewAccount(username, password) {
  accounts.push({
    username,
    password
  });

  saveAccountsToDatabase();
}