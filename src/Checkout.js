import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";

function Checkout(){
    return (
    <div className="checkout">
      <div className="checkout__left">
            <img src="https://www.cardsinternational.com/wp-content/uploads/sites/3/2021/03/credit-one-bank.png" alt="" className="checkout__ad" />
            <div>
               <h2 className="checkout__title">
                 Your Shopping Cart
               </h2>
               <CheckoutProduct/>
            </div>
      </div>

      <div className="checkout__right">
            <Subtotal/>
      </div>
    </div>
    )
}

export default Checkout 