import { React, useEffect, useState } from "react";

import { getCoinList } from "../../services/api";
import SearchBox from "../modules/SearchBox";
import Coins from "../modules/Coins";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";


const Maincontent = () => {

  const [search, setSearch] = useState("");

  const [scoins, setsCoins] = useState([]);

  const [coins, setCoins] = useState([]);

  const [currency, setCurrency] = useState("usd");

  const [page, setPage] = useState(1);

  const [error, setError] = useState(false);
  
  const [errorMassage, setErrorMassage] = useState("");


  useEffect(() => {
    fetch(getCoinList(page, currency))
      .then((response) => {
        if (response.status === 429) {
          setError(true);
          setErrorMassage("Too many requests, please try again later.");
          throw new Error("Too many requests, please try again later.");
        }
        else if (!response.ok) {
          setErrorMassage("Network response was not ok");
          throw new Error("Network response was not ok");
        }else{
          return response.json();
        }
      })
      .then((result) => {
        setError(false);
        setCoins(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, currency]);

  return (
    <div>
      <SearchBox
        coins={coins}
        setsCoins={setsCoins}
        search={search}
        setSearch={setSearch}
        setCurrency={setCurrency}
      />
      <Search />
      {error && <h2>{errorMassage}</h2>}

      {coins.length !== 0 ? (
        search.length ? (
          <Coins search={search} coins={scoins} currency={currency} />
        ) : (
          <>
            <Coins coins={coins} currency={currency} />
            <Pagination page={page} setPage={setPage} />
          </>
        )
      ) : (
        <img style={{ width: "300px" }} src="./loading.png" alt="" />
      )}
    </div>
  );
};

export default Maincontent;
