import RestaurantCard from "./RestaurantCard";
import { RestraurantList } from "../constant";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useonline";

const BodyComponent = () => {
    //const searchText = "KFC"; --->no allowed it doesnt change input text hece we need to use state variable 
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filterdRestaurants,setFilterdRestaurants] = useState([]);
    const [searchInput,setSearchInput] = useState(""); //to create state variable 

    useEffect(()=>{
        //console.log("useEffect")
        getRestaurant();
    },[]);

    async function getRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7049873&lng=74.24325270000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterdRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //console.log("render");
    const isOnline = useOnline();
    if(!isOnline){
        return <h1>🔴Offline,Check your internet connection !!</h1>
    }

    if(filterdRestaurants?.length===0 && searchInput?.length!==0)
    return <h1>No Restaurant Match Your Search....!!</h1>
    
    if(!allRestaurants) return null;

return allRestaurants?.length=== 0?(
    <Shimmer/>
): (   
    <div className="bg-gray-50">
        <div className=" p-5">
            <input type="text" 
            className="p-2 border-solid border border-black rounded-md w-60 h-7" 
            placeholder="Search" 
            value={searchInput} 
            onChange={(e)=>{
                setSearchInput(e.target.value);
            }}
            />
            <button 
            className=" mx-3 border border-solid rounded-md px-2 py-0.5 bg-blue-500 text-white hover:bg-blue-600" 
            onClick={()=>{
                const data = filterData(searchInput,allRestaurants);
                setFilterdRestaurants(data);
                //console.log(searchInput)
            }}>Search</button>
       </div>
        <div className="flex flex-wrap">
        
        {/* ***************** IMPORTANT ******************* */}
           
            {/* <RestraurantCard {...RestraurantList[0].info} />
            <RestraurantCard {...RestraurantList[1].info} />
            <RestraurantCard {...RestraurantList[2].info} />
            <RestraurantCard {...RestraurantList[3].info} />
            <RestraurantCard {...RestraurantList[4].info} />
            <RestraurantCard {...RestraurantList[5].info} /> */}
            {
            filterdRestaurants.map((restaurant)=>{       
                return( 
                <Link className="redirect" to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
                    <RestaurantCard{...restaurant.info}/>
                </Link>
                )
            })
            }
        </div>
        </div>
    )
}

export default BodyComponent;