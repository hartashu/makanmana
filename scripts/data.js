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
    name: "Wee Nam Kee Chicken Rice",
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
        image: '../images/food/Spring Roll.webp',
        price: 50_000 
      },
      {
        name: 'Salted Fish Fried Rice',
        image: '../images/food/Salted Fish Fried Rice.webp',
        price: 61_000
      },
      {
        name: 'Sambal Fried Rice with Seafood',
        image: '../images/food/Sambal Fried Rice with Seafood.webp',
        price: 75_000
      },
      {
        name: 'Dumpling Soup',
        image: '../images/food/Dumpling Soup.webp',
        price: 85_000
      },
      {
        name: 'Hot Plate Beancurd',
        image: '../images/food/Hot Plate Beancurd.webp',
        price: 87_000
      }
    ],
    reviews: [{
      username: 'ombotak',
      stars: 5,
      comment: 'Sangat enak sekali'
    }, {
      username: 'hartashu',
      stars: 5,
      comment: 'Tidak enak'
    }]
  },
  {
    restaurantId: 2,
    name: "Burgreens (Healthy Plant Based Eatery)",
    address: "Jl. BSD Green Office Park No.21 L16, Sampora, Kec. Cisauk, Kabupaten Tangerang, Banten 15345",
    location: "BSD",
    website: "www.burgreens.com",
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
        image: '../images/food/Mighty Mushroom Burger.webp',
        price: 60_500 
      },
      {
        name: "Truffle Mushroom Pasta",
        image: '../images/food/Truffle Mushroom Pasta.webp',
        price: 66_000
      },
      {
        name: "Blackpepper Bowl",
        image: '../images/food/Blackpepper Bowl.webp',
        price: 53_900
      },
      {
        name: "Teriyaki Bowl",
        image: '../images/food/Teriyaki Bowl.webp',
        price: 49_500
      },
      {
        name: "Creamy Mushroom Soup",
        image: '../images/food/Creamy Mushroom Soup.webp',
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
        image: '../images/food/Butlers Sliders.webp',
        price: 104_500 
      },
      {
        name: "Prawn Scampi",
        image: '../images/food/Prawn Scampi.webp',
        price: 141_900
      },
      {
        name: "Butler's Steak",
        image: '../images/food/Butlers Steak.webp',
        price: 251_900
      },
      {
        name: "Steak & Egg",
        image: '../images/food/Steak & Egg.webp',
        price: 174_900
      },
      {
        name: "Garlic Rice",
        image: '../images/food/Garlic Rice.webp',
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
        image: '../images/food/Ikan Lele Goreng.webp',
        price: 10_000 
      },
      {
        name: "Ayam Goreng",
        image: '../images/food/Ayam Goreng.webp',
        price: 12_000
      },
      {
        name: "Daging Rendang",
        image: '../images/food/Daging rendang.webp',
        price: 15_000
      },
      {
        name: "Ayam Opor",
        image: '../images/food/Ayam Opor.webp',
        price: 12_000
      },
      {
        name: "Ikan Tongkol Goreng",
        image: '../images/food/Ikan Tongkol Goreng.webp',
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
        image: '../images/food/Es Kopi Hitam Tetangga.webp',
        price: 22_000 
      },
      {
        name: "Cappucino",
        image: '../images/food/Cappucino.webp',
        price: 31_000
      },
      {
        name: "Chocolate",
        image: '../images/food/Chocolate.webp',
        price: 33_000
      },
      {
        name: "Caramel Macchiato",
        image: '../images/food/Caramel Macchiato.webp',
        price: 35_000
      },
      {
        name: "Es Kopi Susu Tetangga",
        image: '../images/food/Es Kopi Susu Tetangga.webp',
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
        image: '../images/food/Pangsit Goreng 5 Pcs.webp',
        price: 31_250 
      },
      {
        name: "Bakmi Aka / Ayam / Babi",
        image: '../images/food/BakmiAKA.webp',
        price: 42_500
      },
      {
        name: "Bakmi Pangsit / Bakso Aka / Ayam / Babi",
        image: '../images/food/Bakmi Pangsit.webp',
        price: 55_000
      },
      {
        name: "Bakmi Polos Tanpa Daging",
        image: '../images/food/Bakmi Polos Tanpa Daging.webp',
        price: 39_900
      },
      {
        name: "Kwetiau Aka / Ayam / Babi",
        image: '../images/food/Kwetiau Aka.webp',
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
        name: "Mie Goreng Jawa",
        image: '../images/food/Mie Goreng Jawa.webp',
        price: 56_250 
      },
      {
        name: "Gurame Bakar",
        image: '../images/food/Gurame Bakar.webp',
        price: 168_750
      },
      {
        name: "Nasi Goreng Pete",
        image: '../images/food/Nasi Goreng Pete.webp',
        price: 75_000
      },
      {
        name: "Lele Penyet",
        image: '../images/food/Lele Penyet.webp',
        price: 112_500
      },
      {
        name: "Ayam Dada Bakar",
        image: '../images/food/Ayam Dada Bakar.webp',
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
        image: '../images/food/Beef Bulgogi Butter Rice.webp',
        price: 84_549
      },
      {
        name: "Lamb Fried Rice",
        image: '../images/food/Lamb Fried Rice.webp',
        price: 88_451
      },
      {
        name: "Mentai Rice",
        image: '../images/food/Mentai Rice.webp',
        price: 62_436
      },
      {
        name: "Stir Fry Noodle",
        image: '../images/food/Stir Fry Noodle.webp',
        price: 67_639
      },
      {
        name: "Chicken Tempura Udon",
        image: '../images/food/Chicken Tempura Udon.webp',
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
        image: '../images/food/Crunchy French Toast.webp',
        price: 90_000
      },
      {
        name: "Choco Berry Waffle",
        image: '../images/food/Choco Berry Waffle.webp',
        price: 82_000
      },
      {
        name: "Chocolat Noir Cake",
        image: '../images/food/Chocolat Noir Cake.webp',
        price: 57_000
      },
      {
        name: "Pain Au Chocolate",
        image: '../images/food/Pain Au Chocolate.webp',
        price: 39_000
      },
      {
        name: "Butter Croissant",
        image: '../images/food/Butter Croissant.webp',
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
        image: '../images/food/Peach Olong Tea.webp',
        price: 12_500
      },
      {
        name: "Banana Sundae",
        image: '../images/food/Banana Sundae.webp',
        price: 20_000
      },
      {
        name: "Caramel Boba Milk Tea",
        image: '../images/food/Caramel Boba Milk Tea.webp',
        price: 23_750
      },
      {
        name: "Mango Boba Ice Cream",
        image: '../images/food/Mango Boba Ice Cream.webp',
        price: 27_500
      },
      {
        name: "Looong Boba Milk Tea CNY Edition",
        image: '../images/food/Looong Boba Milk Tea CNY Edition.webp',
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
      openingHours: "10:00",
      closingHours: "20:00"
    },
    menus: [
      {
        name: "Sayur Asem",
        image: '../images/food/sayur-asem.webp',
        price: 26_900
      },
      {
        name: "Ayam Bakar ",
        image: '../images/food/ayam-bakar.webp',
        price: 48_200
      },
      {
        name: "Gado Gado Lontong",
        image: '../images/food/gado-gado-lontong.webp',
        price: 55_000
      },
      {
        name: "Empal Madiun",
        image: '../images/food/empal-madiun.webp',
        price: 56_400
      },
      {
        name: "Lontong Sayur",
        image: '../images/food/lontong-sayur.jpg',
        price: 45_200
      }
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
      openingHours: "07:00",
      closingHours: "23:00"
    },
    menus: [
      {
        name: "Sate Kulit Ayam Digoreng",
        image: '../images/food/sate-kulit-ayam.webp',
        price: 22_500
      },
      {
        name: "Soto Betawi Ayam Bagian Dada",
        image: '../images/food/soto-betawi-ayam.webp',
        price: 42_000
      },
      {
        name: "Nasi Goreng Campur Isian Sapi",
        image: '../images/food/nasi-goreng-campur-isian-sapi.webp',
        price: 45_000
      },
      {
        name: "Sop Oseng Daging Sapi ",
        image: '../images/food/sop-oseng-daging-sapi.webp',
        price: 51_000
      },
      {
        name: "Ayam Goreng Bawang Putih (Dada Filet 250gr)",
        image: '../images/food/ayam-goreng-bawang-putih.jpg',
        price: 59_500
      }
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
      count: undefined,
    },
    operatingHours: {
      openingHours: "10:00",
      closingHours: "21.45"
    },
    menus: [
      {
        name: "Bakmi Ahog (Crispy Pork)",
        image: '../images/food/bakmi-ahog.webp',
        price: 41_000
      },
      {
        name: "Bakmi Charsiu",
        image: '../images/food/bakmi-charsiu.webp',
        price: 55_000
      },
      {
        name: "Hainan Chicken Rice",
        image: '../images/food/hainan-chicken-rice.webp',
        price: 40_000
      },
      {
        name: "Pork Knuckle",
        image: '../images/food/pork-knuckle.webp',
        price: 58_000
      },
      {
        name: "BBQ Pork Belly",
        image: '../images/food/bbq-pork-belly.webp',
        price: 60_000
      }
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
      openingHours: "08:00",
      closingHours: "23.00"
    },
    menus: [
      {
        name: "Brulee Chiato",
        image: '../images/food/brulee-chiato.webp',
        price: 39_655
      },
      {
        name: "Literally Kopi Susu",
        image: '../images/food/literally-kopi-susu.webp',
        price: 33_990
      },
      {
        name: "Black On The Rock",
        image: '../images/food/black-on-the-rock.webp',
        price: 28_325
      },
      {
        name: "Dark Mocha HQQ",
        image: '../images/food/dark-mocha.webp',
        price: 36_256
      },
      {
        name: "Kopi Susu Tiramisu",
        image: '../images/food/kopi-susu-tiramisu.webp',
        price: 38_552
      }
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
      openingHours: "08:00",
      closingHours: "21.00"
    },
    menus: [
      {
        name: "Roti Sweet Cheese",
        image: '../images/food/sweet-cheese.webp',
        price: 15_400
      },
      {
        name: "Roti Baso Ayam Telur Asin",
        image: '../images/food/roti-baso-ayam-telur-asin.webp',
        price: 17_800
      },
      {
        name: "Roti Sosis",
        image: '../images/food/sosis.webp',
        price: 19_000
      },
      {
        name: "Roti Pisang Coklat Keju",
        image: '../images/food/pisang-coklat-keju.webp',
        price: 17_800
      },
      {
        name: "Roti Pizza",
        image: '../images/food/pizza.webp',
        price: 20_400
      }
    ]
  },
  {
    restaurantId: 16,
    name: "Restorant Ivan",
    address: "GOP 1 The Breeze",
    location: "BSD",
    website: "",
    cuisine: "Indonesian",
    rating: {
      stars: undefined,
      count: undefined,
    },
    operatingHours: {
      openingHours: "09:00",
      closingHours: "18.00"
    },
    menus: [
      {
        name: "Bubur Mpasi",
        image: '../images/food/Bubur Mpasi.jpg',
        price: 1_680_000
      },
      {
        name: "Nasi Goreng Aking",
        image: '../images/food/Nasi Aking.jpg',
        price: 888_888
      },
      {
        name: "Air Comberan",
        image: '../images/food/Air Comberan.jpg',
        price: 666_000
      },
      {
        name: "Sisa Gosongan",
        image: '../images/food/Gosongan Panci.jpg',
        price: 999_999
      },
      {
        name: "Roti Batu",
        image: '../images/food/Roti Batu.jpg',
        price: 777_777
      }
    ]
  }
];

const restaurants = JSON.parse(localStorage.getItem('restaurants')) || defaultRestaurants;

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

export function getDbRestaurants() {
  return restaurants;
}

export function getRestaurantByRestaurantId(restaurantId, restaurants) {
  let restaurant;

  for (const element of restaurants) {
    if (restaurantId === element.restaurantId) restaurant = element;
  }

  return restaurant;
}

export function getRestaurantRatingImage(restaurant) {
  let stars = restaurant.rating.stars >= 1 ? restaurant.rating.stars * 10 : String(restaurant.rating.stars * 10).padStart(2, '0');

  return `./images/ratings/rating-${stars}.png`;
}

export function getRestaurantRating(restaurant) {
  if (!restaurant.rating /*|| isNaN(restaurant.rating)*/) return '<p class="not-rated">This restaurant has not been rated yet</p>';

  return `
    <div class="restaurant-rating">
      <p>${restaurant.rating.stars.toFixed(1)}</p>
      <img src="${getRestaurantRatingImage(restaurant)}" alt="">
      <p>(${restaurant.rating.count})</p>
    </div>  
  `;
}

function updateAllRating(restaurants) {
  restaurants.forEach(restaurant => restaurant.rating = calculateRating(restaurant.reviews));
}

export function updateCurrentRestaurantRating(restaurant) {
  restaurant.rating = calculateRating(restaurant.reviews);
}

function calculateRating(reviews) {
  if (!reviews) {
    return {
      stars: 0,
      count: 0
    };
  }

  const count = reviews.length;
  let totalStars = 0;
  let stars;

  reviews.forEach(review => {
    totalStars += review.stars;
  });

  stars = totalStars / count;
  stars = Math.round(stars * 2) / 2; // 4.66666 * 2 -> Math.round(9.33332) -> 9 / 2 -> 4.5

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

export function getAllMenus(restaurants) {
  const menus = [];

  for (const restaurant of restaurants) {
    for (const menu of restaurant.menus) {
      menus.push(makeNewMenuAndAssignId(restaurant, menu));
    }
  }

  return menus;
}

/*
  Sort
*/

export function getAllMenuByHighestRating(restaurants) {
  const menus = [];

  const tempRestaurants = [...restaurants];

  tempRestaurants.sort((a, b) => {
    const ratingA = a.rating.stars;
    const ratingB = b.rating.stars;
    if (ratingA < ratingB) {
      return 1;
    }
    if (ratingA > ratingB) {
      return -1;
    }
  
    // names must be equal
    return 0;
  });

  for (const restaurant of tempRestaurants) {
    for (const menu of restaurant.menus) {
      menus.push(makeNewMenuAndAssignId(restaurant, menu));
    }
  }

  return menus;
}

export function getAllMenuByHighestPrice(restaurants) {
  const menus = [];

  const tempRestaurants = [...restaurants];

  for (const restaurant of tempRestaurants) {
    for (const menu of restaurant.menus) {
      menus.push(makeNewMenuAndAssignId(restaurant, menu));
    }
  }

  menus.sort((a, b) => {
    const priceA = a.price;
    const priceB = b.price;
    if (priceA < priceB) {
      return 1;
    }
    if (priceA > priceB) {
      return -1;
    }
  
    // names must be equal
    return 0;
  });

  return menus;
}

export function getAllMenuByLowestPrice(restaurants) {
  const menus = [];

  const tempRestaurants = [...restaurants];

  for (const restaurant of tempRestaurants) {
    for (const menu of restaurant.menus) {
      menus.push(makeNewMenuAndAssignId(restaurant, menu));
    }
  }

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

  return menus;
}

export function getAllMenusByAscendingName(restaurants) {
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

export function getAllMenusByDescendingName(restaurants) {
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

export function getFilteredMenusByLocation(location, restaurants) {
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

export function getFilteredMenusByCuisine(cuisine, restaurants) {
  const filteredByRating = restaurants.filter(restaurant => restaurant.cuisine === cuisine);
  const menus = [];

  for (const restaurant of filteredByRating) {
    for (const menu of restaurant.menus) {
      menus.push(makeNewMenuAndAssignId(restaurant, menu));
    }
  }

  return menus;
}

export function getFilteredMenusByPrice(min = -Infinity, max = Infinity, restaurants) {
  let menus = [];

  for (const restaurant of restaurants) {
    for (const menu of restaurant.menus) {
      menus.push(makeNewMenuAndAssignId(restaurant, menu));
    }
  }

  menus = menus.filter(menu => menu.price >= min && menu.price <= max);

  return menus;
}

export function getFilteredMenusByRating(rating, restaurants) {
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

export function getAllRestaurants(restaurants) {
  const newRestaurants = [];

  for (const restaurant of restaurants) {
    const { restaurantId, name, rating, location } = restaurant;

    const newObject = {
      restaurantId,
      name,
      rating,
      location
    };

    newRestaurants.push(newObject);
  }

  return newRestaurants;
}

function generateRandomReviews(restaurants) {
  for (let i = 0; i < restaurants.length; i++) {
    const restaurant = restaurants[i];

    const newReview = [];

    for (let j = 0; j < 10; j++) {
      const randomStars = Math.floor((Math.random() * 5)) + 1;
      const newReviewObj = {
        username: `User${j}`,
        stars: randomStars,
        comment: 'Good'
      };

      newReview.push(newReviewObj);
    }

    restaurant.reviews = newReview;
  }
  
  // console.log(restaurants);

  saveRestaurantsToLocalStorage();
}

// generateRandomReviews(restaurants);

updateAllRating(restaurants);
