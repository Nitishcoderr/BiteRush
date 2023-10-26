import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import {clearCart} from '../Slice/cartSlice';

const Cart = () => {

  const dispatch = useDispatch()

  const handleClearCart = ()=>{
    dispatch(clearCart())
  }

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-2 p-10">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto"></div>
      <button onClick={handleClearCart} className="p-2 m-2 bg-black text-white rounded-lg">Clear cart</button>
      {
        cartItems.length === 0 && <h1>Cart is empty add items to cart</h1>
      }
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
