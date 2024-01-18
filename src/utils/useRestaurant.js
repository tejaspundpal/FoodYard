import React from 'react'
import { useState,useEffect } from 'react';

const useRestaurant = (id) => {
    const [restaurant, setRestaurnat] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.7049873&lng=74.24325270000001&restaurantId=" + id +"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setRestaurnat(json.data.cards[0].card.card.info);
        // console.log(json);
    }

    return restaurant;
}

export default useRestaurant