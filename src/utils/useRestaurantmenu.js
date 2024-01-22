import React from 'react';
import { useState,useEffect } from 'react';

const useRestaurantmenu = (id) => {
    const [restaurantMenu, setRestaurnatMenu] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.7049873&lng=74.24325270000001&restaurantId=" + id +"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setRestaurnatMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        // console.log(restaurantMenu);
    }

    return restaurantMenu;
}

export const useRestaurantmenu1 = (id) => {
    const [restaurantMenu1, setRestaurnatMenu1] = useState({});

    useEffect(() => {
        getRestaurantInfo1();
    }, []);

    async function getRestaurantInfo1() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.7049873&lng=74.24325270000001&restaurantId=" + id +"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setRestaurnatMenu1(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards)
        // console.log(restaurantMenu1);
    }

    return restaurantMenu1;
}

export default useRestaurantmenu;