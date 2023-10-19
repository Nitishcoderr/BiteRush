import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlinestatus from '../utils/useOnlineStatus';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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
        setFilteredRestaurants(formattedRestaurants);
      } else {
        console.error('No restaurant information found in the API response.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const onlineStatus = useOnlinestatus()

  
  useEffect(() => {
    fetchData();
  }, []);
  
  if(onlineStatus === false) return <h1>Looks like you are offline! Check your internet connection</h1>

  
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()))
              setFilteredRestaurants(filteredRestaurant);
            }}>
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.avgRating > 4);
            setFilteredRestaurants(filteredList);
          }}
          className="filter-btn">
          Top rated button
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.id} to={'/restaurants/'+restaurant.id}>
          <RestaurantCard
            
            resList={restaurant}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
