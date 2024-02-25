import React, { useState } from "react";

const Search = () => {
  const [itemList, setItemList] = useState([
    "Delhi",
    "Bangalore",
    "Pune",
    "Mumbai",
    "Lucknow",
    "Indore",
    "Chandigarh",
    "Gurugram",
    "Noida",
    "Hyderabad",
    "Chennai",
    "Shimla",
    "ShiNagar",
  ]);
  const [searchText, setSearchText] = useState("");
  let searchItemList = itemList.filter((item) =>
    item.toLowerCase().includes(searchText)
  );
  return (
    <div>
      <input
        type="search"
        placeholder="type to search"
        onChange={(e) => setSearchText(e.target.value)}
      />
      {searchItemList.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default Search;
