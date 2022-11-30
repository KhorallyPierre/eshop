import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className="header">
          <href to="/">
            <div className="header__logo">
                <StoreIcon className="header__logoImage" fontSize="large"/>
                <h2 className="header__logoTitle">Free99</h2>
            </div>
          </href>
          

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      
      <div className="header__nav">
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <href to="/Checkout">
           <div className="nav_itemBasket">
            <ShoppingBasketIcon/>
            <span className="nav_itemLineTwo nav_basketCount"> 0 </span>
           </div>
        </href>
      </div>
        </div>
    )
}

export default Header
