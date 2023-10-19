import React from 'react'
import { CDN_URL } from '../utils/constant';

const RestaurantCard = (props) => {
    const {resList} = props;

    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime} = resList;

  return (
    <div className='res-card'>
        <img src={CDN_URL+cloudinaryImageId} alt="res-img" className="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h5>{deliveryTime} Minutes</h5>
    </div>
  )
}

export default RestaurantCard
