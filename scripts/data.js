/*

  Location:
    1. Gading Serpong
    2. Alam Sutera
    3. BSD
    4. Karawaci

*/

const defaultRestaurants = [{
  restaurantId: 1,
  name: 'Soto Betawi Bang Ebet',
  address: 'Ruko Madison Grande Blok L 58, Gading, Kec. Serpong, Kabupaten Tangerang, Banten 15334',
  location: 'Gading Serpong',
  website: 'https://www.instagram.com/sotobetawibangebet',
  cuisine: 'Indonesian',

  rating: {
    stars: undefined,
    count: undefined
  },
  
  operatingHours: {
    openingHours: '07.00',
    closingHours: '23.00'
  },

  menus: [{
    name: 'Soto/Sop Oseng Daging',
    image: './images/food/1.png',
    price: 38_000
  }, {
    name: 'Soto/Sop Oseng Ayam',
    image: './images/food/2.png',
    price: 35_000
  }],

  reviews: [{
    username: 'hartashu',
    stars: 5,
    comment: 'Sangat enak sekali'
  }, {
    username: 'nexcarlos',
    stars: 2,
    comment: 'Tidak enak'
  }]
}, {
  restaurantId: 2,
  name: 'restoran bsd',
  address: 'Ruko Madison Grande Blok L 58, Gading, Kec. Serpong, Kabupaten Tangerang, Banten 15334',
  location: 'BSD',
  website: 'https://www.instagram.com/sotobetawibangebet',
  cuisine: 'Japanese',

  rating: {
    stars: undefined,
    count: undefined
  },
  
  operatingHours: {
    openingHours: '07.00',
    closingHours: '23.00'
  },

  menus: [{
    name: 'air comberan',
    image: './images/food/1.png',
    price: 28_000
  }, {
    name: 'limbah',
    image: './images/food/2.png',
    price: 25_000
  }],

  reviews: [{
    username: 'mgdalenaf',
    stars: 1,
    comment: 'Sangat enak sekali'
  }, {
    username: 'tanboy',
    stars: 1,
    comment: 'Tidak enak'
  }]
}, {
  restaurantId: 3,
  name: 'restoran alsut',
  address: 'Ruko Madison Grande Blok L 58, Gading, Kec. Serpong, Kabupaten Tangerang, Banten 15334',
  location: 'Alam Sutera',
  website: 'https://www.instagram.com/sotobetawibangebet',
  cuisine: 'Korean',

  rating: {
    stars: undefined,
    count: undefined
  },
  
  operatingHours: {
    openingHours: '07.00',
    closingHours: '23.00'
  },

  menus: [{
    name: 'nasi kering',
    image: './images/food/1.png',
    price: 38_000
  }, {
    name: 'nasi aking',
    image: './images/food/2.png',
    price: 35_000
  }],

  reviews: [{
    username: 'ombotak',
    stars: 5,
    comment: 'Sangat enak sekali'
  }, {
    username: 'hartashu',
    stars: 5,
    comment: 'Tidak enak'
  }]
}];

export const restaurants = JSON.parse(localStorage.getItem('restaurants')) || defaultRestaurants;

function addRestaurant([name, address, location, website, cuisine, openingHours, closingHours, menus]) {

  let restaurantId = restaurants.length === 0 ? 1 : restaurants.length + 1;

  const restaurant = {
    restaurantId,
    name,
    address,
    location,
    website,
    cuisine,
    rating: {},
    operatingHours: {
      openingHours,
      closingHours
    },
    menus,
    reviews: []
  };

  restaurants.push(restaurant);
}

function updateAllRating(restaurants) {
  restaurants.forEach(restaurant => {
    restaurant.rating = calculateRating(restaurant.reviews);
  });
}

export function updateCurrentRestaurantRating(restaurant) {
  restaurant.rating = calculateRating(restaurant.reviews);
}

function calculateRating(reviews) {
  if (!reviews) return null;

  const count = reviews.length;
  let totalStars = 0;
  let stars;

  reviews.forEach(review => {
    totalStars += review.stars;
  });

  stars = totalStars / count;
  stars = Math.round(stars * 2) / 2;

  // if (!stars) return null;

  return {
    stars,
    count
  };
}

export function saveRestaurantsToLocalStorage() {
  localStorage.setItem('restaurants', JSON.stringify(restaurants));
}

function makeNewMenuAndAssignId(restaurant, menu) {
  let newMenu = {};

  Object.assign(newMenu, menu);

  newMenu.restaurantId = restaurant.restaurantId;

  return newMenu;
}

export function getFilteredMenusByLocation(location) {
  const filteredByLocation = restaurants.filter(restaurant => restaurant.location === location);
  const menus = [];

  for (const restaurant of filteredByLocation) {
    for (const menu of restaurant.menus) {
      // let newMenu = {};
      // Object.assign(newMenu, menu);
      // newMenu.restaurantId = restaurant.restaurantId;
      // menus.push(newMenu);

      menus.push(makeNewMenuAndAssignId(restaurant, menu));
    }
  }

  return menus;
}

export function getFilteredMenusByRating(rating) {
  const filteredByRating = restaurants.filter(restaurant => restaurant.rating.stars >= rating);
  const menus = [];

  for (const restaurant of filteredByRating) {
    for (const menu of restaurant.menus) {
      // let newMenu = {};
      // Object.assign(newMenu, menu);
      // newMenu.restaurantId = restaurant.restaurantId;
      // menus.push(newMenu);

      menus.push(makeNewMenuAndAssignId(restaurant, menu));
    }
  }

  return menus;
}

export function getFilteredMenusByPrice(min = -Infinity, max = Infinity) {
  let menus = [];

  for (const restaurant of restaurants) {
    for (const menu of restaurant.menus) {
      menus.push(makeNewMenuAndAssignId(restaurant, menu));
    }
  }

  menus = menus.filter(menu => menu.price >= min && menu.price <= max);

  return menus;
}

export function getFilteredMenusByAscendingName() {
  const menus = [];

  for (const restaurant of restaurants) {
    for (const menu of restaurant.menus) {
      menus.push(makeNewMenuAndAssignId(restaurant, menu));
    }
  }

  menus.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

  return menus;
}

export function getFilteredMenusByDescendingName() {
  const menus = [];

  for (const restaurant of restaurants) {
    for (const menu of restaurant.menus) {
      menus.push(makeNewMenuAndAssignId(restaurant, menu));
    }
  }

  menus.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
  
    // names must be equal
    return 0;
  });

  return menus;
}

export function getFilteredMenusByCuisine(cuisine) {
  const filteredByRating = restaurants.filter(restaurant => restaurant.cuisine === cuisine);
  const menus = [];

  for (const restaurant of filteredByRating) {
    for (const menu of restaurant.menus) {
      menus.push(makeNewMenuAndAssignId(restaurant, menu));
    }
  }

  return menus;
}

const restaurant1 = [
  'Gerobak Betawi Gading Serpong',
  'Jl. Gading Serpong Boulevard No.10-11, Pakulonan Bar., Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810',
  'Gading Serpong',
  'http://www.gerobakbetawi.com/',
  'Indonesian',
  '07.30',
  '10.00',
  [{
    name: 'Ketoprak',
    image: './images/food/3.png',
    price: 28_636
  }, {
    name: 'Tahu Telor',
    image: './images/food/4.png',
    price: 25_000
  }]
];

const restaurant2 = [
  'AyamSobbb Speciality',
  'Ruko Madison Grande Blok L/25, Gading, Kec. Serpong, Banten',
  'Gading Serpong',
  '',
  'Indonesian',
  '10.30',
  '20.30',
  [{
    name: 'Ayam Sobbb',
    image: './images/food/5.png',
    price: 26_000
  }, {
    name: 'Ayam Sobbb Kampung',
    image: './images/food/6.png',
    price: 38_000
  }]
];

addRestaurant(restaurant1);
// addRestaurant(restaurant2);
updateAllRating(restaurants);