const rooms = [
  {
    title: "Spacious Single Room Near DYP College",
    rent: 5500,
    location: "Kolhapur",

    ownerDetails: {
      name: "Rahul Patil",
      email: "rahul@gmail.com",
      contact: 9876543210
    },

    facilities: [
      "WiFi",
      "Attached Bathroom",
      "Bed",
      "Cupboard",
      "Fan",
      "24/7 Water",
      "Parking"
    ],

    conditions: [
      "No Smoking",
      "No Pets",
      "Electricity charges separate"
    ],

    images: [
      {
        url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        filename: "room-1"
      },
      {
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        filename: "room-2"
      }
    ],

    category: "Single Room",

    available: "Availabel",

    reviews: [4, 5, 4],

    geometry: {
      type: "Point",
      coordinates: [74.2433, 16.7050]
    },

    gender: "Boys"
  },

  {
    title: "Affordable 1RK Room Near Market",
    rent: 7000,
    location: "Rajarampuri, Kolhapur",

    ownerDetails: {
      name: "Amit Jadhav",
      email: "amit@gmail.com",
      contact: 9823456789
    },

    facilities: [
      "WiFi",
      "Kitchen",
      "Attached Bathroom",
      "Water Supply",
      "Parking"
    ],

    conditions: [
      "No Smoking",
      "Family Preferred"
    ],

    images: [
      {
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        filename: "room-3"
      }
    ],

    category: "1RK",

    available: "Availabel",

    reviews: [5, 4],

    geometry: {
      type: "Point",
      coordinates: [74.2330, 16.7005]
    },

    gender: "Girls"
  },

  {
    title: "Comfortable PG Cot Basis",
    rent: 4500,
    location: "Shahupuri, Kolhapur",

    ownerDetails: {
      name: "Sneha Kulkarni",
      email: "sneha@gmail.com",
      contact: 9765432108
    },

    facilities: [
      "Bed",
      "WiFi",
      "Mess",
      "Laundry",
      "Hot Water",
      "Security",
      "Study Table"
    ],

    conditions: [
      "Students Only",
      "No Smoking"
    ],

    images: [
      {
        url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5",
        filename: "pg-room-1"
      }
    ],

    category: "Cot Basis/PG",

    available: "Not Availabel",

    reviews: [4, 4, 5],

    geometry: {
      type: "Point",
      coordinates: [74.2355, 16.7080]
    },

    gender: "Girls"
  },

  {
    title: "Modern 1BHK Flat Near College",
    rent: 10000,
    location: "Tarabai Park, Kolhapur",

    ownerDetails: {
      name: "Vijay Deshmukh",
      email: "vijay@gmail.com",
      contact: 9898989898
    },

    facilities: [
      "Parking",
      "WiFi",
      "Kitchen",
      "Balcony",
      "Attached Bathroom",
      "24/7 Water"
    ],

    conditions: [
      "No Pets",
      "Electricity Separate",
      "Deposit Required"
    ],

    images: [
      {
        url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        filename: "1bhk-room"
      }
    ],

    category: "1Bhk",

    available: "Availabel",

    reviews: [5, 5, 4],

    geometry: {
      type: "Point",
      coordinates: [74.2265, 16.7035]
    },

    gender: "Boys"
  },

  {
    title: "Premium 2BHK Apartment",
    rent: 15000,
    location: "Shivaji Park, Kolhapur",

    ownerDetails: {
      name: "Priya Shinde",
      email: "priya@gmail.com",
      contact: 9812345678
    },

    facilities: [
      "Parking",
      "Lift",
      "WiFi",
      "Kitchen",
      "Balcony",
      "Security",
      "Power Backup"
    ],

    conditions: [
      "No Smoking",
      "No Pets",
      "Family Preferred"
    ],

    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        filename: "2bhk-room"
      }
    ],

    category: "2Bhk",

    available: "Not Availabel",

    reviews: [5, 4, 5, 5],

    geometry: {
      type: "Point",
      coordinates: [74.2185, 16.7105]
    },

    gender: "Girls"
  }
];

const messData = [
  {
    title: "Shree Ganesh Pure Veg Mess",
    category: "VEG Mess",
    Location: "Rajarampuri, Kolhapur",
    Price: 2500,

    ownerDetails: {
      name: "Ganesh Patil",
      email: "ganeshmess@gmail.com",
      contact: 9876543210
    },

    images: [
      {
        url: "https://images.unsplash.com/photo-1547592180-85f173990554",
        filename: "ganesh-mess"
      },
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        filename: "mess-interior"
      }
    ],

    reviews: [4, 5, 4, 5],

    geometry: {
      type: "Point",
      coordinates: [74.2433, 16.7050]
    },

    WeeklyMenu: [
      {
        day: "Monday",
        items: ["Dal Rice", "Chapati", "Bhaji", "Salad"]
      },
      {
        day: "Tuesday",
        items: ["Paneer Masala", "Rice", "Chapati", "Dal"]
      },
      {
        day: "Wednesday",
        items: ["Misal Pav", "Rice", "Bhaji", "Curd"]
      },
      {
        day: "Thursday",
        items: ["Mix Veg", "Dal", "Rice", "Chapati"]
      },
      {
        day: "Friday",
        items: ["Paneer Bhurji", "Rice", "Chapati", "Salad"]
      },
      {
        day: "Saturday",
        items: ["Veg Pulao", "Dal Fry", "Chapati", "Raita"]
      },
      {
        day: "Sunday",
        items: ["Special Thali", "Puri", "Bhaji", "Sweet"]
      }
    ],

    Availabel: "Available"
  },

  {
    title: "Mahalaxmi Family Mess",
    category: "VEG Mess",
    Location: "Shahupuri, Kolhapur",
    Price: 2200,

    ownerDetails: {
      name: "Sneha Jadhav",
      email: "snehajadhav@gmail.com",
      contact: 9123456780
    },

    images: [
      {
        url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
        filename: "mahalaxmi-mess"
      }
    ],

    reviews: [5, 4, 4, 5, 3],

    geometry: {
      type: "Point",
      coordinates: [74.2350, 16.7000]
    },

    WeeklyMenu: [
      {
        day: "Monday",
        items: ["Dal Tadka", "Rice", "Chapati", "Aloo Bhaji"]
      },
      {
        day: "Tuesday",
        items: ["Rajma", "Rice", "Chapati", "Salad"]
      },
      {
        day: "Wednesday",
        items: ["Veg Kolhapuri", "Rice", "Chapati", "Curd"]
      },
      {
        day: "Thursday",
        items: ["Dal Fry", "Jeera Rice", "Bhaji", "Chapati"]
      },
      {
        day: "Friday",
        items: ["Paneer Masala", "Rice", "Chapati", "Salad"]
      },
      {
        day: "Saturday",
        items: ["Veg Biryani", "Raita", "Papad"]
      },
      {
        day: "Sunday",
        items: ["Special Thali", "Pulao", "Sweet"]
      }
    ],

    Availabel: "Available"
  },

  {
    title: "Kolhapur Non Veg Corner",
    category: "Non-Veg Mess",
    Location: "Tarabai Park, Kolhapur",
    Price: 3200,

    ownerDetails: {
      name: "Rahul Shinde",
      email: "rahulshinde@gmail.com",
      contact: 9988776655
    },

    images: [
      {
        url: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
        filename: "nonveg-mess"
      }
    ],

    reviews: [5, 4, 5, 4],

    geometry: {
      type: "Point",
      coordinates: [74.2200, 16.6900]
    },

    WeeklyMenu: [
      {
        day: "Monday",
        items: ["Chicken Curry", "Rice", "Chapati", "Salad"]
      },
      {
        day: "Tuesday",
        items: ["Egg Curry", "Rice", "Chapati", "Dal"]
      },
      {
        day: "Wednesday",
        items: ["Chicken Biryani", "Raita", "Salad"]
      },
      {
        day: "Thursday",
        items: ["Chicken Masala", "Rice", "Chapati"]
      },
      {
        day: "Friday",
        items: ["Egg Bhurji", "Dal", "Rice", "Chapati"]
      },
      {
        day: "Saturday",
        items: ["Chicken Biryani", "Raita", "Sweet"]
      },
      {
        day: "Sunday",
        items: ["Special Chicken Thali", "Rice", "Chapati", "Salad"]
      }
    ],

    Availabel: "Available"
  },

  {
    title: "Sai Krupa Mess",
    category: "VEG Mess",
    Location: "Kawala Naka, Kolhapur",
    Price: 1800,

    ownerDetails: {
      name: "Amit Deshmukh",
      email: "amitdeshmukh@gmail.com",
      contact: 9090909090
    },

    images: [
      {
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        filename: "sai-krupa"
      }
    ],

    reviews: [4, 3, 4, 5],

    geometry: {
      type: "Point",
      coordinates: [74.2450, 16.7100]
    },

    WeeklyMenu: [
      {
        day: "Monday",
        items: ["Dal Rice", "Bhaji", "Chapati"]
      },
      {
        day: "Tuesday",
        items: ["Chole", "Rice", "Chapati"]
      },
      {
        day: "Wednesday",
        items: ["Aloo Gobi", "Dal", "Rice"]
      },
      {
        day: "Thursday",
        items: ["Mix Veg", "Chapati", "Rice"]
      },
      {
        day: "Friday",
        items: ["Paneer Bhaji", "Dal", "Rice"]
      },
      {
        day: "Saturday",
        items: ["Veg Pulao", "Raita"]
      },
      {
        day: "Sunday",
        items: ["Special Thali", "Sweet"]
      }
    ],

    Availabel: "Few Seats Available"
  },

  {
    title: "Royal Chicken Mess",
    category: "Non-Veg Mess",
    Location: "Gokul Shirgaon, Kolhapur",
    Price: 3500,

    ownerDetails: {
      name: "Vijay Pawar",
      email: "vijaypawar@gmail.com",
      contact: 9765432109
    },

    images: [
      {
        url: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
        filename: "royal-chicken"
      }
    ],

    reviews: [5, 5, 4, 5],

    geometry: {
      type: "Point",
      coordinates: [74.2700, 16.6800]
    },

    WeeklyMenu: [
      {
        day: "Monday",
        items: ["Chicken Curry", "Rice", "Chapati"]
      },
      {
        day: "Tuesday",
        items: ["Chicken Masala", "Rice", "Salad"]
      },
      {
        day: "Wednesday",
        items: ["Egg Curry", "Rice", "Chapati"]
      },
      {
        day: "Thursday",
        items: ["Chicken Handi", "Rice", "Chapati"]
      },
      {
        day: "Friday",
        items: ["Chicken Biryani", "Raita"]
      },
      {
        day: "Saturday",
        items: ["Chicken Curry", "Dal", "Rice"]
      },
      {
        day: "Sunday",
        items: ["Special Chicken Thali", "Biryani", "Sweet"]
      }
    ],

    Availabel: "Full"
  }
];

module.exports= {rooms,messData};
