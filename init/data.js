const sampleListings = [
  {
    title: "Luxury Beachfront Villa",
    description:
      "Experience ultimate luxury in this stunning beachfront villa with private pool and ocean views.",
    image: {
      filename: "beachfront-villa",
      url: "https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Maldives",
    country: "Maldives",
    geometry: {
      type: "Point",
      coordinates: [73.3288, 4.1755], // Coordinates for Maldives
    },
    category: "Beach",
  },
  {
    title: "Cozy Mountain Cabin",
    description:
      "Escape to this cozy cabin nestled in the mountains, perfect for hiking and relaxation.",
    image: {
      filename: "mountain-cabin",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBjYWJpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Swiss Alps",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [8.2275, 46.5584], // Coordinates for Swiss Alps
    },
    category: "Mountains",
  },
  {
    title: "Iconic Paris Apartment",
    description:
      "Stay in the heart of Paris in this stylish apartment with views of the Eiffel Tower.",
    image: {
      filename: "paris-apartment",
      url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXMlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566], // Coordinates for Paris
    },
    category: "Iconic Cities",
  },
  {
    title: "Rustic Farm Stay",
    description:
      "Enjoy a peaceful retreat on this charming farm with fresh produce and scenic views.",
    image: {
      filename: "farm-stay",
      url: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybSUyMHN0YXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Tuscany",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696], // Coordinates for Tuscany
    },
    category: "Farms",
  },
  {
    title: "Arctic Glass Igloo",
    description:
      "Sleep under the Northern Lights in this unique glass igloo in the Arctic Circle.",
    image: {
      filename: "arctic-igloo",
      url: "https://images.unsplash.com/photo-1512273222628-4daea6e55abb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjdGljJTIwaWdsb298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Lapland",
    country: "Finland",
    geometry: {
      type: "Point",
      coordinates: [27.5114, 68.6567], // Coordinates for Lapland
    },
    category: "Arctic",
  },
  {
    title: "Luxury Castle Stay",
    description:
      "Live like royalty in this historic castle with modern amenities and breathtaking views.",
    image: {
      filename: "castle-stay",
      url: "https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzdGxlJTIwc3RheXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Edinburgh",
    country: "Scotland",
    geometry: {
      type: "Point",
      coordinates: [-3.1883, 55.9533], // Coordinates for Edinburgh
    },
    category: "Castles",
  },
  {
    title: "Private Pool Villa",
    description:
      "Relax in this luxurious villa with a private infinity pool and stunning ocean views.",
    image: {
      filename: "pool-villa",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpdmF0ZSUyMHBvb2wlMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095], // Coordinates for Bali
    },
    category: "Amazing Pools",
  },
  {
    title: "Secluded Woodland Cabin",
    description:
      "Escape to this secluded cabin surrounded by lush forests and tranquil nature.",
    image: {
      filename: "woodland-cabin",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZGxhbmQlMjBjYWJpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Vancouver",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-123.1207, 49.2827], // Coordinates for Vancouver
    },
    category: "Woodlands",
  },
  {
    title: "Trendy Urban Loft",
    description:
      "Stay in this trendy loft in the heart of the city, perfect for urban explorers.",
    image: {
      filename: "urban-loft",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJiYW4lMjBsb2Z0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128], // Coordinates for NYC
    },
    category: "Trending",
  },
  {
    title: "Lakeside Camping Retreat",
    description:
      "Enjoy a peaceful camping experience by the lake with stunning views and outdoor activities.",
    image: {
      filename: "camping-retreat",
      url: "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGluZyUyMHJldHJlYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 600,
    location: "Lake Tahoe",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-120.0324, 39.0968], // Coordinates for Lake Tahoe
    },
    category: "Camping",
  },
  {
    title: "Charming Room in Venice",
    description:
      "Stay in a charming room overlooking the canals of Venice, perfect for a romantic getaway.",
    image: {
      filename: "venice-room",
      url: "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVuaWNlJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Venice",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [12.3155, 45.4408], // Coordinates for Venice
    },
    category: "Rooms",
  },
];

module.exports = { data: sampleListings };
