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
  getDbRestaurants,
  getRestaurantByRestaurantId,
  getAllMenus,
  getAllMenuByHighestRating,
  getRestaurantRating,
  getFilteredMenusByLocation,
  getFilteredMenusByRating,
  getFilteredMenusByPrice,
  getFilteredMenusByAscendingName,
  getFilteredMenusByDescendingName,
  getFilteredMenusByCuisine
} from "./data.js";
import { getCurrentAccount, removeCurrentAccount } from "./account.js";

if (!getCurrentAccount) window.location.href = '../index.html';

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

// console.log(getFilteredMenusByCuisine('Korean'));

/*
  Show foods
*/

const restaurants = getDbRestaurants();
const menus = getAllMenus(restaurants);

function renderFoodCards(menus) {
  const foodCardsEl = document.querySelector('.food-cards');

  let cardsHtml = '';

  for (const menu of menus) {

    const restaurant = getRestaurantByRestaurantId(menu.restaurantId, restaurants);

    cardsHtml += `
      <a href='../restaurant.html?restaurantId=${menu.restaurantId}'>
        <div class="card">
          <img src="${menu.image}" alt="" class="card-image">
          <div class="card-text">
            <h3>${menu.name}</h3>
            <p>Price: Rp. ${menu.price}</p>

            <div class="card-detail">
              <div>
                <p>Restaurant: ${restaurant.name}</p>
                ${getRestaurantRating(restaurant)}
              </div>
              <p class="card-location">Location: ${restaurant.location}</p>
            </div>

          </div>
        </div>
      </a>
    `;
  }

  foodCardsEl.innerHTML = cardsHtml;
}

renderFoodCards(menus);


// ${getRestaurantRating(restaurant)}

/*
  Sort by: rating
*/

const sortByEl = document.querySelector('#sort-by');
sortByEl.addEventListener('change', () => {

  let menus;

  const selectValue = sortByEl.value;

  switch (selectValue) {
    case 'sortByRating':
      menus = getAllMenuByHighestRating(restaurants);
      break;
    
    case 'sortByHigherPrice':
      break;

    case 'sortByLowerPrice':
      break;

    case 'sortByAscending':
      break;

    case 'sortByDescending':
      break;
  }


  renderFoodCards(menus);
});