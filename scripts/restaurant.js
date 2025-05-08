import { 
  getDbRestaurants,
  updateCurrentRestaurantRating,
  saveRestaurantsToLocalStorage,
  getRestaurantRating,
  getRestaurantRatingImage
 } from "./data.js";
import { getCurrentAccount, removeCurrentAccount } from "./account.js";
import { formatPrice } from "./helper.js";

if (!getCurrentAccount()) window.location.href = '../index.html';

function getRestaurant(restaurantId) {
  let restaurant;

  for (const element of getDbRestaurants()) {
    if (restaurantId === element.restaurantId) restaurant = element;
  }

  return restaurant;
}

// function getRestaurantRatingImage(restaurant) {
//   let stars = restaurant.rating.stars >= 1 ? restaurant.rating.stars * 10 : String(restaurant.rating.stars * 10).padStart(2, '0');

//   return `./images/ratings/rating-${stars}.png`;
// }

// function getRestaurantRating(restaurant) {
//   if (!restaurant.rating /*|| isNaN(restaurant.rating)*/) return '<p class="not-rated">This restaurant has not been rated yet</p>';

//   return `
//     <div class="restaurant-rating">
//       <p>${restaurant.rating.stars.toFixed(1)}</p>
//       <img src="${getRestaurantRatingImage(restaurant)}" alt="">
//       <p>(${restaurant.rating.count})</p>
//     </div>  
//   `;
// }

function getCustomerRatingImage(review) {
  let stars = review.stars >= 1 ? review.stars * 10 : String(review.stars * 10).padStart(2, '0');

  return `./images/ratings/rating-${stars}.png`;
}

function getCustomerRating(review) {
  return `
    <div class="customer-rating">
      <p>${review.stars}</p>
      <img src="${getCustomerRatingImage(review)}" alt="">
    </div>
  `;
}

/*
  Get restaurantId from query parameter
*/

let restaurantId;

window.addEventListener('load', () => {
  const url = document.location.search;
  const query = new URLSearchParams(url);
  restaurantId = Number(query.get('restaurantId'));
  renderRestaurantPage();
})

/*
  Render page
*/

function renderRestaurantPage() {
  
  const restaurant = getRestaurant(restaurantId);
  
  /*
    Restaurant details
  */

  const restaurantDetailEl = document.querySelector('.restaurant-detail');
  
  restaurantDetailEl.innerHTML = `
    <div class="restaurant-detail-left">
      <h1>${restaurant.name}</h1>
      ${getRestaurantRating(restaurant)}
    </div>

    <div class="restaurant-detail-right">
      <p><span>Address:<span> ${restaurant.address}</p>
      <p><span>Location:<span> ${restaurant.location}</p>
      <p><span>Operating Hours:<span> ${restaurant.operatingHours.openingHours} - ${restaurant.operatingHours.closingHours}</p>
      <p><span>Website:<span> <a href="${restaurant.website}" target="_blank">${restaurant.website}</a></p>
    </div>
  `;

  /*
    Restaurant menus
  */
 
  const restaurantNameEl = document.querySelector('.restaurant-name');
  restaurantNameEl.innerHTML = restaurant.name + ` <span class='menus'>Menus</span>`;
 
  const menus = restaurant.menus;
  let cardsHtml = '';

  for (const menu of menus) {
    cardsHtml += `
      <div class="card">
        <img src="${menu.image}" alt="" class="card-image">
        <div class="card-text">
          <h3>${menu.name}</h3>
          <p style="font-weight: bold">Price: ${formatPrice(menu.price, 'IDR')}</p>

          <div class="card-detail">
            <div>
              <p>Restaurant: ${restaurant.name}</p>
              ${getRestaurantRating(restaurant)}
            </div>
            <p class="card-location">Loc: ${restaurant.location}</p>
          </div>

        </div>
      </div>
    `;
  }

  const restaurantMenusGridEl = document.querySelector('.restaurant-menus-grid');
  restaurantMenusGridEl.innerHTML = cardsHtml;
  
  /*
    Show reviews
  */
  
  const reviews = restaurant.reviews;

  const customerReviewsEl = document.querySelector('.customer-reviews');

  if (reviews) {
    
    let reviewsHtml = '';
    
    for (const review of reviews) {
      reviewsHtml += `
        <div class="customer-review">
          <p>${review.username}</p>
          <div>${getCustomerRating(review)}</div>
          <p>${review.comment}</p>
        </div>
      `;
    }
    
    customerReviewsEl.innerHTML = reviewsHtml;
  } else {
    customerReviewsEl.innerHTML = 'No reviews yet';
  }
  
  
  /*
    Give review - Fix
  */
  
  const giveReviewFormEl = document.querySelector('#give-review-form');
  const giveReviewUsernameEl = document.querySelector('.give-review-username');
  const radioButtonsEl = document.querySelectorAll('input[name="rating"]');
  const giveReviewTextarea = document.querySelector('#give-review-textarea');
  
  giveReviewUsernameEl.innerText = getCurrentAccount();
  
  giveReviewFormEl.addEventListener('submit', (event) => {
    event.preventDefault();

    let stars;
    for (const radioButton of radioButtonsEl) {
      if (radioButton.checked) {
        stars = Number(radioButton.value);
        break;
      } 
    }
  
    let isNewReviewer = true;

    if (reviews) {
      for (const review of reviews) {
        if (review.username === getCurrentAccount()) {
          review.stars = stars;
          review.comment = giveReviewTextarea.value;
          isNewReviewer = false;
          break;
        }
      }
    }

    if (isNewReviewer) {
      let newReview = {
        username: getCurrentAccount(),
        stars: stars,
        comment: giveReviewTextarea.value
      };
    
      if (!restaurant.hasOwnProperty('reviews')) restaurant.reviews = []; 

      restaurant.reviews.push(newReview);

    }

    
    saveRestaurantsToLocalStorage();
    updateCurrentRestaurantRating(restaurant);
    renderRestaurantPage();
    // giveReviewTextarea.value = '';
  });
  
  /*
    Logout
  */
  
  const logoutButtonEl = document.querySelector('.logout-button');
  
  logoutButtonEl.addEventListener('click', () => {
    removeCurrentAccount();
    window.location.href = '../index.html';
  });

}