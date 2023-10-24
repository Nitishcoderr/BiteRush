import React, { useContext, useEffect, useState } from 'react';
import RestaurantCard,{withOpenLabel} from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlinestatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const RestaurantOpenlabel = withOpenLabel(RestaurantCard)

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
      );
      const data = await response.json();

      const restaurants =
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

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

  const onlineStatus = useOnlinestatus();

  useEffect(() => {
    fetchData();
  }, []);

  if (onlineStatus === false)
    return <h1>Looks like you are offline! Check your internet connection</h1>;

    const {loggedInUser,setUserName} = useContext(UserContext) 

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <input type="text" className='p-2 border border-black' placeholder='Username' value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}>
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => res.avgRating > 4);
              setFilteredRestaurants(filteredList);
            }}
            className="px-4 py-2 bg-gray-100 rounded-lg">
            Top rated button
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap items-center justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={'/restaurants/' + restaurant.id}>
              {/* IF THE ITEM IS DELIVERABLE OR NOT TO ADD BATCH */}
              {
                restaurant.isOpen ? <RestaurantOpenlabel resList={restaurant} /> : <RestaurantCard resList={restaurant} />
              }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
