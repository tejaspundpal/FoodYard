import React from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../constant'
import useRestaurant from '../utils/useRestaurant'
import useRestaurantmenu, { useRestaurantmenu1 } from '../utils/useRestaurantmenu'
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice'
import { ShimmerResMenu } from './Shimmer'

const RestaurantInfo = () => {
    const { id } = useParams();
    const restaurant = useRestaurant(id);
    const restaurantMenu = useRestaurantmenu(id);
    const restaurantMenu1 = useRestaurantmenu1(id);

    const dispatch = useDispatch();
    const addFoodItem = (item) => {
        dispatch(addItem(item));
    };

    if (restaurantMenu === undefined && restaurantMenu1 === undefined) {
        return (
            <div className='flex flex-col bg-gray-100 p-4 mt-20'>
                <div className=' bg-white p-4 shadow-lg rounded-md mb-4'>
                    <div className='flex items-center mb-4'>
                        <img className='w-32 h-32 object-cover rounded-full mr-4' src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt={restaurant.name} />
                        <div>
                            <h2 className='text-xl font-bold mb-2'>{restaurant.name}</h2>
                            <p className='text-gray-600'><span className='font-semibold'>Rating: </span>{restaurant.avgRating}&#11088;</p>
                            <p className='text-gray-600'><span className='font-semibold'>Address: </span>{restaurant.locality}-{restaurant.areaName}, {restaurant.city}</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-4 shadow-md rounded-md'>
                    <h1 className='font-bold'>No Menu Available</h1>
                </div>
            </div>
        )
    }
    else if (restaurantMenu === undefined && restaurantMenu1 !== undefined) {
        return (Object.values(restaurantMenu1).length === 0) ? (
            <ShimmerResMenu />
        ) : (
            <div className='flex flex-col bg-gray-100 p-4 mt-20'>
                <div className=' bg-white p-4 shadow-lg rounded-md mb-4'>
                    <div className='flex items-center mb-4'>
                        <img className='w-32 h-32 object-cover rounded-full mr-4' src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt={restaurant.name} />
                        <div>
                            <h2 className='text-xl font-bold mb-2'>{restaurant.name}</h2>
                            <p className='text-gray-600'><span className='font-semibold'>Rating: </span>{restaurant.avgRating}&#11088;</p>
                            <p className='text-gray-600'><span className='font-semibold'>Address: </span>{restaurant.locality}-{restaurant.areaName}, {restaurant.city}</p>
                        </div>
                    </div>
                </div>
                <div className=' bg-white p-4 shadow-md rounded-md'>
                    <h3 className='text-lg font-bold mb-4 text-gray-800'>Recommended Menu:</h3>
                    <ul>
                        {/* Array.isArray(restaurantMenu) && restaurantMenu.map((item, index) */}
                        {(Object.values(restaurantMenu1)).map((item, index) => (
                            <li key={item.card.info.id} className='flex items-center justify-between text-gray-700 mb-2 border-b-2 border-gray-300'>
                                <div className='flex items-center'>
                                    <img className='w-24 h-24 object-cover rounded-md mr-2 mb-2' src={IMG_CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
                                    <div>
                                        <span>{item?.card?.info?.name}</span>
                                        <p>{item?.card?.info?.isVeg ? <img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol" /> : <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol" />}</p>
                                        <p>Price : &#8377;{(item?.card?.info?.price) / 100}</p>
                                    </div>
                                </div>
                                <button className='bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-700' onClick={() => addFoodItem(item)}>Add Item</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
    else if(restaurantMenu !== undefined && restaurantMenu1 === undefined){
        return (Object.values(restaurantMenu).length === 0) ? (
            <ShimmerResMenu />
        ) : (
            <div className='flex flex-col bg-gray-100 p-4 mt-20'>
                <div className=' bg-white p-4 shadow-lg rounded-md mb-4'>
                    <div className='flex items-center mb-4'>
                        <img className='w-32 h-32 object-cover rounded-full mr-4' src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt={restaurant.name} />
                        <div>
                            <h2 className='text-xl font-bold mb-2'>{restaurant.name}</h2>
                            <p className='text-gray-600'><span className='font-semibold'>Rating: </span>{restaurant.avgRating}&#11088;</p>
                            <p className='text-gray-600'><span className='font-semibold'>Address: </span>{restaurant.locality}-{restaurant.areaName}, {restaurant.city}</p>
                        </div>
                    </div>
                </div>
                <div className=' bg-white p-4 shadow-md rounded-md'>
                    <h3 className='text-lg font-bold mb-4 text-gray-800'>Recommended Menu:</h3>
                    <ul>
                        {/* Array.isArray(restaurantMenu) && restaurantMenu.map((item, index) */}
                        {(Object.values(restaurantMenu)).map((item, index) => (
                            <li key={item.card.info.id} className='flex items-center justify-between text-gray-700 mb-2 border-b-2 border-gray-300'>
                                <div className='flex items-center'>
                                    <img className='w-24 h-24 object-cover rounded-md mr-2 mb-2' src={IMG_CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
                                    <div>
                                        <span>{item?.card?.info?.name}</span>
                                        <p>{item?.card?.info?.isVeg ? <img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol" /> : <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol" />}</p>
                                        <p>Price : &#8377;{(item?.card?.info?.price) / 100}</p>
                                    </div>
                                </div>
                                <button className='bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-700' onClick={() => addFoodItem(item)}>Add Item</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
    else {
        return (Object.values(restaurantMenu).length === 0) ? (
            <ShimmerResMenu />
        ) : (

            <div className='flex flex-col bg-gray-100 p-4 mt-20'>
                <div className=' bg-white p-4 shadow-lg rounded-md mb-4'>
                    <div className='flex items-center mb-4'>
                        <img className='w-32 h-32 object-cover rounded-full mr-4' src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt={restaurant.name} />
                        <div>
                            <h2 className='text-xl font-bold mb-2'>{restaurant.name}</h2>
                            <p className='text-gray-600'><span className='font-semibold'>Rating: </span>{restaurant.avgRating}&#11088;</p>
                            <p className='text-gray-600'><span className='font-semibold'>Address: </span>{restaurant.locality}-{restaurant.areaName}, {restaurant.city}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className=' bg-white p-4 shadow-md rounded-md'>
                        <h3 className='text-lg font-bold mb-4 text-gray-800'>Recommended Menu:</h3>
                        <ul>
                            {/* Array.isArray(restaurantMenu) && restaurantMenu.map((item, index) */}
                            {(Object.values(restaurantMenu)).map((item, index) => (
                                <li key={item.card.info.id} className='flex items-center justify-between text-gray-700 mb-2 border-b-2 border-gray-300'>
                                    <div className='flex items-center'>
                                        <img className='w-24 h-24 object-cover rounded-md mr-2 mb-2' src={IMG_CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
                                        <div>
                                            <span>{item?.card?.info?.name}</span>
                                            <p>&#8377;{(item?.card?.info?.price) / 100}</p>
                                            <p>{item?.card?.info?.isVeg ? <img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol" /> : <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol" />}</p>
                                        </div>
                                    </div>
                                    <button className='bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-700' onClick={() => addFoodItem(item)}>Add Item</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className=' bg-white p-4 shadow-md rounded-md mt-8'>
                        <h3 className='text-lg font-bold mb-4 text-gray-800'>Other Menu:</h3>
                        <ul>
                            {/* Array.isArray(restaurantMenu) && restaurantMenu.map((item, index) */}
                            {(Object.values(restaurantMenu1)).map((item, index) => (
                                <li key={item.card.info.id} className='flex items-center justify-between text-gray-700 mb-2 border-b-2 border-gray-300'>
                                    <div className='flex items-center'>
                                        <img className='w-24 h-24 object-cover rounded-md mr-2 mb-2' src={IMG_CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
                                        <div>
                                            <span>{item?.card?.info?.name}</span>
                                            <p>&#8377;{(item?.card?.info?.price) / 100}</p>
                                            <p>{item?.card?.info?.isVeg ? <img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol" /> : <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol" />}</p>
                                        </div>
                                    </div>
                                    <button className='bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-700' onClick={() => addFoodItem(item)}>Add Item</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default RestaurantInfo