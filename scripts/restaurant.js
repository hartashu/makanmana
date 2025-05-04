import { restaurants, updateCurrentRestaurantRating, saveRestaurantsToLocalStorage } from "./data.js";
import { currentAccount, removeCurrentAccount } from "./account.js";

if (!currentAccount) window.location.href = '../index.html';

function getRestaurant(restaurantId) {
  let restaurant;

  for (const element of restaurants) {
    if (element.restaurantId === restaurantId) restaurant = element;
  }

  return restaurant;
}

function getRestaurantRatingImage(restaurant) {
  let stars = restaurant.rating.stars >= 1 ? restaurant.rating.stars * 10 : String(restaurant.rating.stars * 10).padStart(2, '0');

  return `./images/ratings/rating-${stars}.png`;
}

function getRestaurantRating(restaurant) {
  if (!restaurant.rating || isNaN(restaurant.rating)) return '<p class="not-rated">This restaurant has not been rated yet</p>';

  return `
    <div class="restaurant-rating">
      <p>${restaurant.rating.stars.toFixed(1)}</p>
      <img src="${getRestaurantRatingImage(restaurant)}" alt="">
      <p>(${restaurant.rating.count})</p>
    </div>  
  `;
}

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
  Restaurant details
*/

function renderRestaurantPage() {

  const restaurant = getRestaurant(restaurantId);

  const menus = restaurant.menus;
  let cardsHtml = '';
  
  const restaurantDetailEl = document.querySelector('.restaurant-detail');
  
  for (const menu of menus) {
    cardsHtml += `
      <div class="card">
        <img src="${menu.image}" alt="" class="food-image">
        <h3>${menu.name}</h3>
        <p>Price: Rp. ${menu.price}</p>
      </div>
    `;
  }
  
  restaurantDetailEl.innerHTML = `
      <h1>${restaurant.name}</h1>
      ${getRestaurantRating(restaurant)}
      <p>Address: ${restaurant.address}</p>
      <p>Location: ${restaurant.location}</p>
      <p>Operating Hours: ${restaurant.operatingHours.openingHours} - ${restaurant.operatingHours.closingHours}</p>
      <p>Website: ${restaurant.website}</p>
  
      <h2>${restaurant.name} Menu</h2>
  
      <div class="restaurant-detail-grid">
        ${cardsHtml}
      </div>
  `;
  
  /*
    Show reviews
  */
  
  const reviews = restaurant.reviews;
  
  const customerReviewsEl = document.querySelector('.customer-reviews');
  
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
  
  /*
    Give review
  */
  
  const giveReviewFormEl = document.querySelector('#give-review-form');
  const giveReviewUsernameEl = document.querySelector('.give-review-username');
  const giveRatingEl = document.querySelector('#give-rating');
  const giveReviewTextarea = document.querySelector('#give-review-textarea');
  
  giveReviewUsernameEl.innerText = currentAccount;
  
  giveReviewFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
  
    let isNewReviewer = true;
  
    for (const review of reviews) {
      if (review.username === currentAccount) {
        review.stars = Number(giveRatingEl.value);
        review.comment = giveReviewTextarea.value;
        isNewReviewer = false;
        break;
      }
    }
  
    if (isNewReviewer) {
      let newReview = {
        username: currentAccount,
        stars: Number(giveRatingEl.value),
        comment: giveReviewTextarea.value
      };
    
      restaurant.reviews.push(newReview);
    }

    updateCurrentRestaurantRating(restaurant);
    saveRestaurantsToLocalStorage();
    renderRestaurantPage();
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

// renderRestaurantPage();