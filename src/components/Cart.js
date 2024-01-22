import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../constant';
import { clearCart,removeItem } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  }

  return (
    <div className="flex flex-col min-h-screen mt-20">
      <div className="flex-grow">
        <div className="bg-white p-4 shadow-md rounded-md">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Shopping Cart ({cartItems.length} Items)</h1>
            <button
              className="bg-blue-500 rounded-md text-white px-2 m-1.5 hover:bg-blue-700"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          </div>
          {cartItems.length === 0 ? (
            <div>
              <p className="font-bold text-gray-700">Your cart is empty now.</p>
            </div>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between text-gray-700 mb-2 border-b-2 border-gray-300"
                >
                  <div className="flex items-center">
                    <img
                      className="w-20 h-20 object-cover rounded-md mr-2 mb-2"
                      src={IMG_CDN_URL + item?.card?.info?.imageId}
                      alt={item?.card?.info?.name}
                    />
                    <div>
                      <span>{item?.card?.info?.name}</span>
                      <p>Price: &#8377;{(item?.card?.info?.price / 100)}</p>
                    </div>
                  </div>
                  <button className='bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700' onClick={() => removeFoodItem(item)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
