/*

  Location:
    1. Gading Serpong
    2. Alam Sutera
    3. BSD
    4. Karawaci

*/

const defaultRestaurants = [
  {
    restaurantId: 1,
    name: "Wee Nam Kee Chicken Rice The Breeze, BSD City",
    address: "The Breeze BSD, Batik 2 - L22, Jl. BSD Green Office Park, Sampora, Cisauk, Tangerang Regency, Banten 15345",
    location: "BSD",
    website: "",
    cuisine: "Chinese",
    rating: {
      stars: undefined,
      count: undefined,
    },
    operatingHours: {
      openingHours: "10.00",
      closingHours: "22.00"
    },
    menus: [
      {
        name: 'Spring Roll',
        image: './images/food/1.png',
        price: 50_000 
      },
      {
        name: 'Salted Fish Fried Rice',
        image: './images/food/1.png',
        price: 61_000
      },
      {
        name: 'Sambal Fried Rice with Seafood',
        image: './images/food/1.png',
        price: 75_000
      },
      {
        name: 'Dumpling Soup',
        image: './images/food/1.png',
        price: 85_000
      },
      {
        name: 'Hot Plate Beancurd',
        image: './images/food/1.png',
        price: 87_000
      }
    ]
  },
  {
    restaurantId: 2,
    name: "Burgreens The Breeze - Healthy Plant-Based Eatery",
    address: "Jl. BSD Green Office Park No.21 L16, Sampora, Kec. Cisauk, Kabupaten Tangerang, Banten 15345",
    location: "BSD",
    website: "",
    cuisine: "Western",
    rating: {
      stars: undefined,
      count: undefined,
    },
    operatingHours: {
      openingHours: "10.00",
      closingHours: "21.30"
    },
    menus: [
      {
        name: "Mighty Mushroom Burger",
        image: './images/food/1.png',
        price: 60_500 
      },
      {
        name: "Truffle Mushroom Pasta",
        image: './images/food/1.png',
        price: 66_000
      },
      {
        name: "Blackpepper Bowl",
        image: './images/food/1.png',
        price: 53_900
      },
      {
        name: "Teriyaki Bowl",
        image: './images/food/1.png',
        price: 49_500
      },
      {
        name: "Creamy Mushroom Soup",
        image: './images/food/1.png',
        price: 44_000
      }
    ]
  },
  {
    restaurantId: 3,
    name: "Butler’s Steak",
    address: "Upper West Experience Center Unit 02 Jl. Raya BSD CBD 55 Lot.1.12, BSD City, Sampora, Kec. Cisauk, Kabupaten Tangerang, Banten 15345",
    location: "BSD",
    website: "",
    cuisine: "Western",
    rating: {
      stars: undefined,
      count: undefined,
    },
    operatingHours: {
      openingHours: "11.00",
      closingHours: "22.00"
    },
    menus: [
      {
        name: "Butler's Sliders",
        image: './images/food/1.png',
        price: 104_500 
      },
      {
        name: "Prawn Scampi",
        image: './images/food/1.png',
        price: 141_900
      },
      {
        name: "Butler's Steak",
        image: './images/food/1.png',
        price: 251_900
      },
      {
        name: "Steak & Egg",
        image: './images/food/1.png',
        price: 174_900
      },
      {
        name: "Garlic Rice",
        image: './images/food/1.png',
        price: 33_000
      }
    ]
  },
  {
    restaurantId: 4,
    name: "Warteg Jaya Bahari BSD",
    address: "Ruko ICE Business Park Blok A No 21, Kec. Pagedangan, Kabupaten Tangerang, Banten 15339",
    location: "BSD",
    website: "",
    cuisine: "Indonesian",
    rating: {
      stars: undefined,
      count: undefined
    },
    operatingHours: {
      openingHours: "07.00",
      closingHours: "22.00"
    },
    menus: [
      {
        name: "Ikan Lele Goreng",
        image: './images/food/1.png',
        price: 10_000 
      },
      {
        name: "Ayam Goreng",
        image: './images/food/1.png',
        price: 12_000
      },
      {
        name: "Daging Rendang",
        image: './images/food/1.png',
        price: 15_000
      },
      {
        name: "Ayam Opor",
        image: './images/food/1.png',
        price: 12_000
      },
      {
        name: "Ikan Tongkol Goreng",
        image: './images/food/1.png',
        price: 10_000
      }
    ]
  },
  {
    restaurantId: 5,
    name: "Toko Kopi TUKU - BSD",
    address: "Ruko Sektor 1.3, Blok RB No. 1, Jl. Griya Loka Raya, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten 15310",
    location: "BSD",
    website: "",
    cuisine: "Beverages",
    rating: {
      stars: undefined,
      count: undefined,
    },
    operatingHours: {
      openingHours: "07.00",
      closingHours: "21.00"
    },
    menus: [
      {
        name: "Es Kopi Hitam Tetangga",
        image: './images/food/1.png',
        price: 22_000 
      },
      {
        name: "Cappucino",
        image: './images/food/1.png',
        price: 31_000
      },
      {
        name: "Chocolate",
        image: './images/food/1.png',
        price: 33_000
      },
      {
        name: "Caramel Macchiato ",
        image: './images/food/1.png',
        price: 35_000
      },
      {
        name: "Es Kopi Susu Tetangga",
        image: './images/food/1.png',
        price: 25_000
      }
    ]
  },
  {
    restaurantId: 6,
    name: "Bakmi AKA Alam Sutera",
    address: "Ruko pasar 8, blok RC no.8, Pondok Jagung, Kec. Serpong Utara, Kota Tangerang Selatan, Banten 15325",
    location: "Alam Sutera",
    website: "",
    cuisine: "Noodles",
    rating: {
      stars: undefined,
      count: undefined,
    },
    operatingHours: {
      openingHours: "07.00",
      closingHours: "17.00"
    },
    menus: [
      {
        name: "Pangsit Goreng 5 Pcs",
        image: './images/food/1.png',
        price: 31_250 
      },
      {
        name: "Bakmi Aka / Ayam / Babi",
        image: './images/food/1.png',
        price: 42_500
      },
      {
        name: "Bakmi Pangsit / Bakso Aka / Ayam / Babi",
        image: './images/food/1.png',
        price: 55_000
      },
      {
        name: "Bakmi Polos Tanpa Daging",
        image: './images/food/1.png',
        price: 39_900
      },
      {
        name: "Kwetiau Aka / Ayam / Babi",
        image: './images/food/1.png',
        price: 42_500
      }
    ]
  },
  {
    restaurantId: 7,
    name: "Ikan Bakar Cianjur - Alam Sutera",
    address: "Jl. Alam Sutera Boulevard Utama No.Kav. 20, Pakulonan, Kec. Serpong, Kota Tangerang Selatan, Banten 15325",
    location: "Alam Sutera",
    website: "",
    cuisine: "Indonesian",
    rating: {
      stars: undefined,
      count: undefined,
    },
    operatingHours: {
      openingHours: "10:00",
      closingHours: "22:00"
    },
    menus: [
      {
        name: "Nasi Liwet",
        image: './images/food/1.png',
        price: 56_250 
      },
      {
        name: "Gurame Bakar",
        image: './images/food/1.png',
        price: 168_750
      },
      {
        name: "Nasi Goreng Pete",
        image: './images/food/1.png',
        price: 75_000
      },
      {
        name: "Lele Penyet",
        image: './images/food/1.png',
        price: 112_500
      },
      {
        name: "Ayam Dada Bakar",
        image: './images/food/1.png',
        price: 40_000
      }
    ]
  },
  {
    restaurantId: 8,
    name: "Canabeans Alam Sutera",
    address: "Apartement Brooklyn A01/A03, Jl. Alam Sutera Boulevard, Pakulonan, Kec. Serpong Utara, Kota Tangerang Selatan, Banten 15325",
    location: "Alam Sutera",
    website: "",
    cuisine: "Western",
    rating: {
      stars: undefined,
      count: undefined,
    },
    operatingHours: {
      openingHours: "07:00",
      closingHours: "22:00"
    },
    menus: [
      {
        name: "Beef Bulgogi Butter Rice",
        image: './images/food/1.png',
        price: 84_549
      },
      {
        name: "Lamb Fried Rice",
        image: './images/food/1.png',
        price: 88_451
      },
      {
        name: "Mentai Rice",
        image: './images/food/1.png',
        price: 62_436
      },
      {
        name: "Stir Fry Noodle",
        image: './images/food/1.png',
        price: 67_639
      },
      {
        name: "Chicken Tempura Udon",
        image: './images/food/1.png',
        price: 75_443
      }
    ]
  },
  {
    restaurantId: 9,
    name: "NOB Coffee & Eatery, The Grove Alam Sutera",
    address: "QM54+FWW, Pakulonan, Serpong Utara, South Tangerang City, Banten, Alam Sutera",
    location: "Alam Sutera",
    website: "",
    cuisine: "Dessert",
    rating: {
      stars: undefined,
      count: undefined,
    },
    operatingHours: {
      openingHours: "10:00",
      closingHours: "22:00"
    },
    menus: [
      {
        name: "Crunchy French Toast",
        image: './images/food/1.png',
        price: 90_000
      },
      {
        name: "Choco Berry Waffle",
        image: './images/food/1.png',
        price: 82_000
      },
      {
        name: "Chocolat Noir Cake",
        image: './images/food/1.png',
        price: 57_000
      },
      {
        name: "Pain Au Chocolate",
        image: './images/food/1.png',
        price: 39_000
      },
      {
        name: "Butter Croissant",
        image: './images/food/1.png',
        price: 28_000
      }
    ]
  },
  {
    restaurantId: 10,
    name: "Cooler City Alam Sutra",
    address: "Ruko the prominence 38G alam sutera serpong, Jl. Jalur Sutera Boulevard No.29, Kota Tangerang, Banten",
    location: "Alam Sutera",
    website: "",
    cuisine: "Dessert",
    rating: {
      stars: undefined,
      count: undefined
    },
    operatingHours: {
      openingHours: "10:00",
      closingHours: "20:00"
    },
    menus: [
      {
        name: "Peach Olong Tea",
        image: './images/food/1.png',
        price: 12_500
      },
      {
        name: "Banana Sundae",
        image: './images/food/1.png',
        price: 20_000
      },
      {
        name: "Caramel Boba Milk Tea",
        image: './images/food/1.png',
        price: 23_750
      },
      {
        name: "Mango Boba Ice Cream",
        image: './images/food/1.png',
        price: 27_500
      },
      {
        name: "Looong Boba Milk Tea CNY Edition",
        image: './images/food/1.png',
        price: 30_000
      }
    ]
  },
  {
    restaurantId: 11,
    name: "Gado Gado Mak Gobang Gading Serpong",
    address: "Jl. Gading Golf Boulevard Ruko Diamond 3 No.26, Pakulonan Bar., Kec. Klp. Dua, Kabupaten Tangerang, Banten 15811",
    location: "Gading Serpong",
    website: "",
    cuisine: "Indonesian",
    rating: {
      stars: undefined,
      count: undefined,
    },
    operatingHours: {
      openingHours: "10:00 AM",
      closingHours: "8:00 PM"
    },
    menus: [
      
    ]
  },
  {
    restaurantId: 12,
    name: "SOTO BETAWI BANG EBET",
    address: "Ruko Madison Grande Blok L 58, Gading, Kec. Serpong, Kabupaten Tangerang, Banten 15334",
    location: "Gading Serpong",
    website: "",
    cuisine: "Indonesian",
    rating: {
      stars: undefined,
      count: undefined,
    },
    operatingHours: {
      openingHours: "7:00 AM",
      closingHours: "11:00 PM"
    },
    menus: [
      
    ]
  },
  {
    restaurantId: 13,
    name: "Hoghock, Gading Serpong",
    address: "Ruko Golden 8, Gading, Serpong, Jl. Ki Hajar Dewantara No.5, Pakulonan Bar., Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810",
    location: "Gading Serpong",
    website: "",
    cuisine: "Chinese",
    rating: {
      stars: undefined,
      count: undefinedined,
    },
    operatingHours: {
      openingHours: "10:00 AM",
      closingHours: "9.45 pm"
    },
    menus: [
      
    ]
  },
  {
    restaurantId: 14,
    name: "Kopitagram - Gading Serpong",
    address: "Jl. Klp. Gading Bar. No.5 Blok CB3, West Pakulonan, Kelapa Dua, Tangerang Regency, Banten 15810",
    location: "Gading Serpong",
    website: "",
    cuisine: "Beverages",
    rating: {
      stars: undefined,
      count: undefined,
    },
    operatingHours: {
      openingHours: "8:00 AM",
      closingHours: "11.00 pm"
    },
    menus: [
      
    ]
  },
  {
    restaurantId: 15,
    name: "Kayla Bakery - Cake & Coffee | Toko Roti Gading Serpong",
    address: "Ruko Pisa Grande 2, blok H5, Gading, Kec. Serpong, Kabupaten Tangerang, Banten 15810",
    location: "Gading Serpong",
    website: "",
    cuisine: "Dessert",
    rating: {
      stars: undefined,
      count: undefined,
    },
    operatingHours: {
      openingHours: "8:00 AM",
      closingHours: "9.00 pm"
    },
    menus: [
      
    ]
  }
];

/*
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
*/

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