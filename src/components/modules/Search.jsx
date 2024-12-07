import React, { useEffect, useState } from "react";
import { getSearchedList } from "../../services/api";
import "./search.scss";


const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searched, setSearched] = useState();

  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };
  useEffect(() => {

    const controller = new AbortController()

    if (searchValue) {
      fetch(getSearchedList(searchValue) , {signal : controller.signal})
        .then((res) => res.json())
        .then((json) => {
          setSearched(json.coins), console.log(json);
        })
        .catch((error) =>  error.name !== "AbortError" && console.log(error));
    }else{
      setSearched()
    }

    return () =>
      controller.abort()
    

  }, [searchValue]);

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="search in all coins"
        onChange={searchHandler}
        value={searchValue}
      />
      {searched &&  (
        <div className="results">
          <div>
            {searched.map((coin) => (
              <div key={coin.id} className="searchedCoin">
                <img src={coin.large} alt={coin.name} />
                <p>{coin.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
