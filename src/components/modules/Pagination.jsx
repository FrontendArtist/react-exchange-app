import React, { useState } from 'react'
import "../../styles/components/pagination.scss"
const Pagination = ({page, setPage }) => {

    const previousHandler = () =>{
        if (page<=1)return;
        setPage(page => page-1)


    }
    const nextHandler = () =>{
        if (page>=10)return;
        setPage(page => page+1)
    }
  return (
    <div className='pagination' >

        <button className='prevbutton' onClick={previousHandler}>previous</button>
        <p className={ page === 1 ? "active" : "noactive"}>1</p>
        <p className={page === 2 ? "active" : "noactive"}>2</p>
        {
            page > 2 && page < 9 && 
            <div style={{display:"flex" , alignItems:"center" }}>
            <span>...</span>
            <p className={ "active"}>{page}</p>
            <span>...</span>
            </div>
            || page<3 && <p>...</p> || page> 8 && <p>...</p>
            }
        <p className={ page === 9 ? "active" : "noactive"}>9</p>
        <p className={page === 10 ? "active" : "noactive"}>10</p>
        <button className='nextbutton' onClick={nextHandler}>next</button>

    </div>
  )
}

export default Pagination