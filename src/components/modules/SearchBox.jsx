import React, { useState } from 'react'
import "../../styles/components/searchbox.scss"


const SearchBox = ({coins,setsCoins,search,setSearch,setCurrency}) => {
  
  const  searchHandler = e=> {
     setSearch(e.target.value)
    const searchedCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(e.target.value.toLowerCase())
      )

      console.log(e.target.value);
      setsCoins(searchedCoins);

     }

     const selectHandler = (e)=>{
        setCurrency(e.target.value)
     }


  return (
    <div className='search-box' >
        <input type="text" placeholder='search in page' value={search} onChange={searchHandler} name="searchbox" id="search" />
        <select  name="select" id="select">
            <option onClick={selectHandler} value="usd">USD</option>
            <option onClick={selectHandler} value="eur">EUR</option>
        </select>
        
    </div>
  )
}

export default SearchBox