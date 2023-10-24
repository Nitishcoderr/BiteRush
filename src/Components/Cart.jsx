import React from 'react'
import { useSelector } from 'react-redux'
import ItemList from './ItemList'

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items)
  return (
    <div className='text-center m-2 p-10'>
    <h1 className='font-bold text-2xl'>Cart</h1>
    <div className="w-6/12 m-auto"></div>
        <ItemList items={cartItems} />
    </div>
  )
}

export default Cart
