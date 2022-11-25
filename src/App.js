import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
function App() {
  return (
    <div className="App">
      <div className='header_logo'> 
        <StoreIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle"> eShop</h2>
      </div>
     
      <div className="header_search"></div>
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
  );
}

export default App;
