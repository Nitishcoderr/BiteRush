import React, { useState } from 'react'
import ItemList from './ItemList';


const RestaurantCategory = ({data,showItems,setShowIndex}) => {


  const handleClick=()=>{
    setShowIndex();
  }
  return (
    <div>
      <div className='w-6/12 mx-auto my-4 p-2 bg-gray-50 shadow-lg'>
        <div className=' flex justify-between cursor-pointer ease-in-out transition-all duration-300' onClick={handleClick}>
        <span className='font-bold text-lg'>{data.title} ({data.itemCards.length}) </span>
        <span>⬇️</span>
        </div>
      {/* ACCORDIAN BODY */}
      {
        showItems &&  <ItemList items={data.itemCards} />
      }
     
      </div>
    </div>
  )
}

export default RestaurantCategory
