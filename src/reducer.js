export const initialState = {
  hotels: [
    { id: 1, name: "Marriott", address: "London", starRating: 5 },
    { id: 2, name: "Hilton", address: "Paris", starRating: 5 },
    { id: 3, name: "Mahali Mzuri", address: "Masai Mara", starRating: 3 },
    {
      id: 4,
      name: "Nayara Tented Camp",
      address: "Cairo",
      starRating: 4,
    },
    { id: 5, name: "The Opposite House", address: "California", starRating: 3 },
    { id: 6, name: "Capella", address: "Paris", starRating: 4 },
    { id: 7, name: "Capella Ubud", address: "Bali", starRating: 3 },
    { id: 8, name: " Grace Hotel", address: "Santorini", starRating: 4 },
    { id: 9, name: " Kamalame Cay", address: "London", starRating: 3 },
    {
      id: 10,
      name: "The Oberoi Udaivilas",
      address: "Udaipur",
      starRating: 4,
    },
    {
      id: 11,
      name: "The Temple House",
      address: "Chengdu",
      starRating: 3,
    },
    { id: 12, name: "The Oberoi", address: "New Delhi", starRating: 4 },
    { id: 13, name: "Hotel Paracas", address: "Paracas", starRating: 3 },
    {
      id: 14,
      name: "Taj Holiday Village Resort & Spa",
      address: "Goa",
      starRating: 4,
    },
    {
      id: 15,
      name: "Savute Elephant Lodge",
      address: "Chobe National Park",
      starRating: 3,
    },
    {
      id: 16,
      name: "The Oberoi Vanyavilas Wildlife Resort",
      address: "Ranthambhore",
      starRating: 4,
    },
    { id: 17, name: "andarin Oriental", address: "Milan", starRating: 3 },
    { id: 18, name: "La Réserve", address: "Paris", starRating: 4 },
    {
      id: 19,
      name: "Nobu Ryokan Malibu",
      address: "California",
      starRating: 3,
    },
    { id: 20, name: "Soneva Fushi", address: "Maldives", starRating: 4 },
    { id: 21, name: "Shangri-La the Shard", address: "London", starRating: 3 },
    { id: 22, name: "Alila Manggis", address: "Paris", starRating: 4 },
    { id: 23, name: "Canaves Oia Epitome", address: "London", starRating: 3 },
    { id: 24, name: "Four Seasons ", address: "Turkey", starRating: 4 },
    { id: 25, name: "Fasano Boa Vista", address: "London", starRating: 3 },
    { id: 26, name: "W Maldives", address: "Maldives", starRating: 7 },
  ],
  // A copy of our Data, so after Search Reset the data gets back to it's original state (A work around I thought about)
  searchedHotels: [
    { id: 1, name: "Marriott", address: "London", starRating: 5 },
    { id: 2, name: "Hilton", address: "Paris", starRating: 5 },
    { id: 3, name: "Mahali Mzuri", address: "Masai Mara", starRating: 3 },
    {
      id: 4,
      name: "Nayara Tented Camp",
      address: "Cairo",
      starRating: 4,
    },
    { id: 5, name: "The Opposite House", address: "California", starRating: 3 },
    { id: 6, name: "Capella", address: "Paris", starRating: 4 },
    { id: 7, name: "Capella Ubud", address: "Bali", starRating: 3 },
    { id: 8, name: " Grace Hotel", address: "Santorini", starRating: 4 },
    { id: 9, name: " Kamalame Cay", address: "London", starRating: 3 },
    {
      id: 10,
      name: "The Oberoi Udaivilas",
      address: "Udaipur",
      starRating: 4,
    },
    {
      id: 11,
      name: "The Temple House",
      address: "Chengdu",
      starRating: 3,
    },
    { id: 12, name: "The Oberoi", address: "New Delhi", starRating: 4 },
    { id: 13, name: "Hotel Paracas", address: "Paracas", starRating: 3 },
    {
      id: 14,
      name: "Taj Holiday Village Resort & Spa",
      address: "Goa",
      starRating: 4,
    },
    {
      id: 15,
      name: "Savute Elephant Lodge",
      address: "Chobe National Park",
      starRating: 3,
    },
    {
      id: 16,
      name: "The Oberoi Vanyavilas Wildlife Resort",
      address: "Ranthambhore",
      starRating: 4,
    },
    { id: 17, name: "andarin Oriental", address: "Milan", starRating: 3 },
    { id: 18, name: "La Réserve", address: "Paris", starRating: 4 },
    {
      id: 19,
      name: "Nobu Ryokan Malibu",
      address: "California",
      starRating: 3,
    },
    { id: 20, name: "Soneva Fushi", address: "Maldives", starRating: 4 },
    { id: 21, name: "Shangri-La the Shard", address: "London", starRating: 3 },
    { id: 22, name: "Alila Manggis", address: "Paris", starRating: 4 },
    { id: 23, name: "Canaves Oia Epitome", address: "London", starRating: 3 },
    { id: 24, name: "Four Seasons ", address: "Turkey", starRating: 4 },
    { id: 25, name: "Fasano Boa Vista", address: "London", starRating: 3 },
    { id: 26, name: "W Maldives", address: "Maldives", starRating: 7 },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        hotels: state.hotels.filter((x) => x.name === action.value),
      };
    case "RESET":
      return {
        ...state,
        hotels: state.searchedHotels,
      };
    case "DELETE_HOTEL":
      const index = state.hotels.findIndex((hotel) => hotel.id === action.id);
      let newHotels = [...state.hotels];
      if (index >= 0) {
        newHotels.splice(index, 1);
      } else {
        console.warn("Can't remove Hotel, as It's not in the List");
      }
      return {
        ...state,
        hotels: newHotels,
      };
    default:
      return state;
  }
};

export default reducer;
