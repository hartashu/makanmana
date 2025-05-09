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
  getRestaurantRating,
  getAllMenus,
  getAllMenuByHighestRating,
  getAllMenusByAscendingName,
  getAllMenusByDescendingName,
  getAllMenuByLowestPrice,
  getAllMenuByHighestPrice,
  getFilteredMenusByLocation,
  getFilteredMenusByPrice,
  getFilteredMenusByCuisine,
  getFilteredMenusByRating,
  getAllRestaurants
} from "./data.js";
import { getCurrentAccount, removeCurrentAccount } from "./account.js";
import { formatPrice } from "./helper.js";

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
  Show foods
*/

const restaurants = getDbRestaurants();
// const menus = getAllMenus(restaurants);
const menus = getAllMenuByHighestRating(restaurants);


function renderFoodCards(menus) {
  const foodCardsEl = document.querySelector('.food-cards');

  let cardsHtml = '';

  for (const menu of menus) {

    const restaurant = getRestaurantByRestaurantId(menu.restaurantId, restaurants);

    cardsHtml += `
      <div class="card">
        <a href='../restaurant.html?restaurantId=${menu.restaurantId}'>
          <img src="${menu.image}" alt="" class="card-image">
          <div class="card-text">
            <h3>${menu.name}</h3>
            <p>Price: ${formatPrice(menu.price, 'IDR')}</p>

            <div class="card-detail">
              <div>
                <p>${restaurant.name}</p>
                ${getRestaurantRating(restaurant)}
              </div>
              <p class="card-location">${restaurant.location}</p>
            </div>

          </div>
        </a>
      </div>
    `;
  }

  if (menus.length === 0) cardsHtml = 'Menu not available'; 

  foodCardsEl.innerHTML = cardsHtml;
  foodCardsEl.scrollTop = 0;
}

renderFoodCards(menus);

/*
  Sort by:
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
      menus = getAllMenuByHighestPrice(restaurants);
      break;

    case 'sortByLowerPrice':
      menus = getAllMenuByLowestPrice(restaurants);
      break;

    case 'sortByAscending':
      menus = getAllMenusByAscendingName(restaurants);
      break;

    case 'sortByDescending':
      menus = getAllMenusByDescendingName(restaurants);
      break;
  }

  renderFoodCards(menus);
});

/*
  Filter
*/


// querySelector HTML tags
const filterLocationSelectEl = document.querySelector('#filter-location');
const filterPriceMinInputEl = document.querySelector('#filter-price-min');
const filterPriceMaxInputEl = document.querySelector('#filter-price-max');
const filterCuisineInputEl = document.querySelector('#filter-cuisine');
const filterRatingSelectEl = document.querySelector('#filter-rating');

const defaultOptionLocation = filterLocationSelectEl.querySelector('option[selected]');

// Filter by location
filterLocationSelectEl.addEventListener('change', () => {
  const location = filterLocationSelectEl.value;
  const menus = getFilteredMenusByLocation(location, restaurants);

  renderFoodCards(menus);
});

// Filter by price
filterPriceMinInputEl.addEventListener('change', () => { 
  let minPrice = Number(filterPriceMinInputEl.value);
  let maxPrice = Number(filterPriceMaxInputEl.value); 

  if (minPrice === 0) minPrice = -Infinity;
  if (maxPrice === 0) maxPrice = Infinity;

  let menus = getFilteredMenusByPrice(minPrice, maxPrice, restaurants);

  // Sort from cheapest
  menus.sort((a, b) => {
    const priceA = a.price;
    const priceB = b.price;
    if (priceA > priceB) {
      return 1;
    }
    if (priceA < priceB) {
      return -1;
    }
  
    // names must be equal
    return 0;
  });

  if ((minPrice === 0 || minPrice) && 
      (maxPrice === 0 || maxPrice)) {
    renderFoodCards(menus);
  }

  // filterPriceMinInputEl.value = 

});

filterPriceMaxInputEl.addEventListener('change', () => {
  let minPrice = Number(filterPriceMinInputEl.value);
  let maxPrice = Number(filterPriceMaxInputEl.value);

  if (minPrice === 0) minPrice = -Infinity;
  if (maxPrice === 0) maxPrice = Infinity;

  let menus = getFilteredMenusByPrice(minPrice, maxPrice, restaurants);

  // Sort from cheapest
  menus.sort((a, b) => {
    const priceA = a.price;
    const priceB = b.price;
    if (priceA > priceB) {
      return 1;
    }
    if (priceA < priceB) {
      return -1;
    }
  
    // names must be equal
    return 0;
  });

  if ((minPrice === 0 || minPrice) && 
      (maxPrice === 0 || maxPrice)) {
    renderFoodCards(menus);
  }
});

// Filter by cuisine
filterCuisineInputEl.addEventListener('change', () => {
  const cuisine = filterCuisineInputEl.value;
  const menus = getFilteredMenusByCuisine(cuisine, restaurants);

  renderFoodCards(menus);
});

// Filter by rating
filterRatingSelectEl.addEventListener('change', () => {
  const rating = Number(filterRatingSelectEl.value);
  const menus = getFilteredMenusByRating(rating, restaurants);

  renderFoodCards(menus);
});

// Tabs foods & shops
const tabFoodsEl = document.querySelector('.tab-foods');
const tabShopsEl = document.querySelector('.tab-shops');

const foodCardsEl = document.querySelector('.food-cards');
const shopCardsEl = document.querySelector('.shop-cards');
const filterEl = document.querySelector('.filter');

tabShopsEl.addEventListener('click', () => {
  foodCardsEl.classList.add('hidden');
  shopCardsEl.classList.remove('hidden');

  tabShopsEl.classList.add('main-top-active');
  tabFoodsEl.classList.remove('main-top-active');

  filterEl.style.pointerEvents = 'none';
});

tabFoodsEl.addEventListener('click', () => {
  foodCardsEl.classList.remove('hidden');
  shopCardsEl.classList.add('hidden');

  tabShopsEl.classList.remove('main-top-active');
  tabFoodsEl.classList.add('main-top-active');

  filterEl.style.pointerEvents = 'auto';
});

// Get shops
function renderShopCards(restaurants) {


  let shopsHtml = '';

  const newRestaurants = getAllRestaurants(restaurants);
  
  for (const restaurant of newRestaurants) {
    shopsHtml += `
      <div>
        <a href="../restaurant.html?restaurantId=${restaurant.restaurantId}">
          <p>${restaurant.name}</p>
          <div>${getRestaurantRating(restaurant)}</div>
        </a>
      </div>
    `;
  }
  
  shopCardsEl.innerHTML = shopsHtml;
}

renderShopCards(restaurants);