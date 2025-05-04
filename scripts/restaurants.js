/*
  Search by:
  1. Location                 :: 'Gading Serpong', 'BSD', 'Alam Sutera'
  2. Price                    :: 
  3. Rating                   :: (>) more than or equal rating
  4. Ascending / Descending   :: a-z / z-a
  5. Open-close hours         : 
  6. Cuisines                 ::

*/

import {
  restaurants,
  getFilteredMenusByLocation,
  getFilteredMenusByRating,
  getFilteredMenusByPrice,
  getFilteredMenusByAscendingName,
  getFilteredMenusByDescendingName,
  getFilteredMenusByCuisine
} from "./data.js";
import { currentAccount, removeCurrentAccount } from "./account.js";

if (!currentAccount) window.location.href = '../index.html';

/*
  Logout button
*/

const logoutButtonEl = document.querySelector('.logout-button');

logoutButtonEl.addEventListener('click', () => {
  removeCurrentAccount();
  window.location.href = '../index.html';
});

/*
  Filter
*/

// console.log(getFilteredMenusByLocation('Gading Serpong'));
// console.log(getFilteredMenusByLocation('BSD'));
// console.log(getFilteredMenusByLocation('Alam Sutera'));

// console.log(getFilteredMenusByRating(1));
// console.log(restaurants);

// console.log(getFilteredMenusByPrice(20_000, 30_000));

// console.log(getFilteredMenusByAscendingName());
// console.log(getFilteredMenusByDescendingName());

console.log(getFilteredMenusByCuisine('Korean'));