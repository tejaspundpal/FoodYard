import React from 'react'
import { useState,useEffect } from 'react';

const useAllrestaurants = () => {
    const [allRestaurants,setAllRestaurants] = useState([]);
    useEffect(()=>{
        //console.log("useEffect")
        getRestaurant();
    },[]);

    async function getRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7049873&lng=74.24325270000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilterdRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return allRestaurants;
}

export default useAllrestaurants