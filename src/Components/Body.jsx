import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import '../style/Body.css';
import resList from '../utils/mockData';

const Body = () => {

// By using useState we can change the state of resList data
  const [listOfRestaurants, setListOfRestaurants] = useState(resList)

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            // here we are filtering out the data which was coming from resList which one having more than 4 rating
            const filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4);
            // the data which was filtered -> now we are seting or passing in setListOfRestaurants this will render the resList
            setListOfRestaurants(filteredList)
          }}
          className="filter-btn">
          Top rated button
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.data.id}
            resList={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
