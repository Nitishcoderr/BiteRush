import React from 'react'
import { CDN_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addItems } from '../Slice/cartSlice';

const ItemList = ({items}) => {
    

  const dispatch = useDispatch()

  const handleAddItem = (item)=>{
    // Dispatch an action
    dispatch(addItems(item));
  }

  return (
    <div>
        {items.map(item=>(
            <div className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between' key={item.card.info.id}>
                
                <div className='w-9/12'>
                <div className='p-2'>
                <span>{item.card.info.name}</span>
                <span> - ₹ { item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice /100 }</span>
                </div>
                <p className='text-xs'>{item.card.info.description}</p>
                </div>
                <div className='w-3/12'>
                <div className='absolute'>
                <button onClick={()=>handleAddItem(item)} className='p-2 bg-white text-green-500 rounded-lg cursor-pointer text-xs font-bold shadow-lg ml-2 mt-2'>ADD + </button>
                </div>
                <img src={CDN_URL+item.card.info.imageId} alt="category" className='' />
                </div>
            </div>
        ))}
    </div>
  )
}

export default ItemList
