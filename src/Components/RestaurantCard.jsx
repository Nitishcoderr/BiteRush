import React from 'react'
import { CDN_URL } from '../utils/constant';

const RestaurantCard = (props) => {
    const {resList} = props;

    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime} = resList;

  return (
    <div className='m-2 w-[350px] shadow-lg shadow-slate-500 bg-green-100 hover:bg-green-200'>
        <img src={CDN_URL+cloudinaryImageId} alt="res-img" className="res-logo rounded-sm w-[100%]" />
      <h3 className='font-bold py-1 px-2 text-lg' >{name}</h3>
      <h4 className='px-2 py-1  text-sm'>{cuisines.join(", ")}</h4>
      <h4 className='px-2 py-1 font-extrabold text-red-800'>{avgRating}</h4>
      <h4 className='px-2 py-1'>{costForTwo}</h4>
      <p className='px-2 py-1 text-slate-700'>{deliveryTime} Minutes</p>
      
    </div>
  )
}


// HIGHER ORDER COMPONENT

// INPUT - RESTAURANTCARD ==> RESTAURANTCARD OPEN

export const withOpenLabel = (RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className='absolute bg-blue-500 p-2 m-2 rounded-lg text-white z-10'>OPEN</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard
