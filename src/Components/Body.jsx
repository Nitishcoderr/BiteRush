import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import '../style/Body.css';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
      );
      const data = await response.json();

      const restaurants =
        data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (restaurants && Array.isArray(restaurants)) {
        const formattedRestaurants = restaurants.map((restaurant) => ({
          id: restaurant.info.id,
          name: restaurant.info.name,
          locality: restaurant.info.locality,
          areaName: restaurant.info.areaName,
          costForTwo: restaurant.info.costForTwo,
          cloudinaryImageId: restaurant.info.cloudinaryImageId,
          cuisines: restaurant.info.cuisines,
          avgRating: restaurant.info.avgRating,
          deliveryTime: restaurant.info.sla.deliveryTime,
          lastMileTravel: restaurant.info.sla.lastMileTravel,
          serviceability: restaurant.info.sla.serviceability,
          nextCloseTime: restaurant.info.availability.nextCloseTime,
          isOpen: restaurant.info.isOpen,
          restaurantLink: restaurant.cta.link,
        }));

        setListOfRestaurants(formattedRestaurants);
      } else {
        console.error('No restaurant information found in the API response.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.avgRating > 4);
            setListOfRestaurants(filteredList);
          }}
          className="filter-btn">
          Top rated button
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            resList={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
