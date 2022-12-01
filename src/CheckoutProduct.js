import React from 'react';
import "./CheckoutProduct.css"
import StarIcon from '@mui/icons-material/Star';

function CheckoutProduct() {
    return (
        <div className="CheckoutProduct">
            <img src="https://images.katespade.com/is/image/KateSpade/K8701_300?$desktopProductZoom$" alt="" className="checkoutProduct__image" />
            <div className="product__infro">
                <p className="checkoutProduct__title">
                Schuyler Medium Dome Satchel" 

                </p>
                <p className="checkoutProduct__price">
                    <small> $</small>
                    <strong> 2400</strong>
                </p>
                <div className="checkoutProduct__rating">
                        <p> <StarIcon/> </p>
                </div>
                <button> Remove from Basket</button>
            </div>
        </div>
    
    )


}

export default CheckoutProduct