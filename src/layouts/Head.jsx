import React from 'react';
import logo from "../assets/AD.png";
import "./header.scss"
function Head() {
  const isLogin = true;

  return (
    <>
    <div className='header'>
      <h3>AD EXchange Project</h3>
      <img className='logo' src={logo} alt="ad" />
    </div>

    </>
  )
}

export default Head;