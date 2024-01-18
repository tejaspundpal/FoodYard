export function filterData(searchInput,allRestaurants){
    const filterData = allRestaurants.filter((restaurant)=>
        restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    //console.log(filterData);
    return filterData;
}
