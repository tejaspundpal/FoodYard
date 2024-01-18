import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../constant';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <div className='flex justify-between'>
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Shopping Cart ({cartItems.length} Items)</h1>
            <button className='bg-blue-500 rounded-md text-white px-2 m-1.5 hover:bg-blue-700' onClick={()=>handleClearCart()}>Clear Cart</button>
            </div>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id} className="flex items-center justify-between text-gray-700 mb-2 border-b-2 border-gray-300">
                            <div className="flex items-center">
                                <img
                                    className="w-20 h-20 object-cover rounded-md mr-2 mb-2"
                                    src={IMG_CDN_URL + item?.card?.info?.imageId}
                                    alt={item?.card?.info?.name}
                                />
                                <div>
                                    <span>{item.name}</span>
                                    <p>Price: &#8377;{(item?.card?.info?.price / 100)}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
