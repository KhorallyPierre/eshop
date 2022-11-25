import React from "react";
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';

function Header(){
    return (
        <div className="header">
<div className="App">
      <div className='header_logo'> 
        <StoreIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle"> eShop</h2>
      </div>
     
      <div className="header_search"> 
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header__searchIcon" fontSize="large" />
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <spam className="nav_itemLineOne"> Hello Guest</spam>
          <spam className="nav_itemLineTwo"> Sign In </spam>
          
        </div>
        <div className="nav_item">
          <spam className="nav_itemLineOne"> your </spam>
          <spam className="nav_itemLineOne"> shop</spam>
        </div>
        <div className="nav_item">
         <ShoppingBasketIcon fontSize="large" />
         <h2 className="header"> eShop</h2>
          <spam className="nav_itemLineOne"> 0</spam>
        </div>
      </div>
  
    </div>
        </div>
    )
}

export default Header