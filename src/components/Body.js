import RestaurentCards from "./RestaurentCards";
// import resLists from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // creating a hook variable
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredListOfRestaurents, setFilteredListOfRestaurents] = useState([])

  // the callback will only execute after the component loaded
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    // setListOfRestaurents(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    // The above is not a good way of writting we can use optional chaining instead
    setFilteredListOfRestaurents(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListOfRestaurents(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // creating a shimmer ui for better ux
  // if (listOfRestaurents.length === 0) {
  // return <h1>loading.....</h1> // instead of this we gonna load some fake layout
  //   return <Shimmer />;
  // }

  const [searchText, setSearchText] = useState("");

  // redering shimmer and actual ui in a single return
  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-container">
      <div className="search-filter-container">
        <div className="search-container">
          <div className="box-btn-wrapper">
            <input
              className="search-box"
              type="text"
              placeholder="Search for restaurent.."
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            />
            <button
              className="search-btn"
              onClick={() => {
                console.log(searchText);
                
                const filteredSearchList = listOfRestaurents.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredListOfRestaurents(filteredSearchList);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="filter-container">
          <button
            className="filter-btn"
            onClick={() => {
              // filtering logic
              const filteredList = listOfRestaurents.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredListOfRestaurents(filteredList);
              console.log("list updated");
            }}
          >
            Filter Top Rated
          </button>
        </div>
      </div>
      <div className="cards-container">
        {filteredListOfRestaurents.map((restaurent) => (
          <RestaurentCards key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
