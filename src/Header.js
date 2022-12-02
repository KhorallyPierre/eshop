import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import {useStateValue } from "./StateProvider";

function Header() {
  const [{basket}, dispatch] = useStateValue();
    return (
        <div className="header">
          <Link to="/">
            <div className="header__logo">
                <StoreIcon className="header__logoImage" fontSize="large"/>
                <h2 className="header__logoTitle">SellMeLots</h2>
            </div>
          </Link>
          

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
        <Link to="/Checkout">
           <div className="nav_itemBasket">
            <ShoppingBasketIcon/>
            <span className="nav_itemLineTwo nav_basketCount"> {basket.length} </span>
           </div>
        </Link>
      </div>
        </div>
    )
}

export default Header
