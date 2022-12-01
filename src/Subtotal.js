import React from "react";
import "./Subtotal.css";
// accessed through npm i react-currency-format --save --force
import CurrencyFormat from "react-currency-format";

function Subtotal(){
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText = {(value) => (
                    <>
                        <p> 
                            Subtotal (0 items): 
                            <strong> 0 </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> Rhis order contains a gift 
                        </small>
                        <button> Proceed to Checkout</button>
                    </>
                )}

                decimalScale={2}
                value={0}
                displayType= "text"
                thousandSeparator={true}
            />
        </div>
    )
}

export default Subtotal 