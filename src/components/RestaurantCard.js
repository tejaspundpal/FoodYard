import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({id,cloudinaryImageId,name,avgRating,cuisines,locality,areaName,costForTwo}) => (
    <div className="bg-white w-60 h-80 mx-5 p-2 mb-6 shadow-lg border-gray-200 border-solid border rounded-lg overflow-hidden transition-all duration-500 hover:scale-105">
        <img className="h-44 w-[100%]" alt="" src={IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="font-bold text-xl text-ellipsis overflow-hidden whitespace-nowrap">{name}</h2>
        {avgRating && (
            <h3>{avgRating} &#11088;</h3>
        )}        
        <h3 className="text-ellipsis overflow-hidden whitespace-nowrap">{cuisines.join(",")}</h3>
        <p className="text-ellipsis overflow-hidden whitespace-nowrap">{locality},{areaName}</p>
        <p className="font-semibold text-green-600 text-ellipsis overflow-hidden whitespace-nowrap">{costForTwo}</p>
        {/* <p>{id}</p> */}
    </div>
)

export default RestaurantCard;