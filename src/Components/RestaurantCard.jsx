import React from 'react'
import  '../style/RestaurantCard.css'

const RestaurantCard = (props) => {
    const {resList} = props;

    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime} = resList?.data;

  return (
    <div className='res-card'>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b14cd9fc40129fcfb97aa7e621719d07" alt="res-img" className="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h5>{deliveryTime} Minutes</h5>
    </div>
  )
}

export default RestaurantCard
