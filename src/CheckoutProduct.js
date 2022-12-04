import React from 'react';
import "./CheckoutProduct.css"
import StarIcon from '@mui/icons-material/Star';

function CheckoutProduct({id, image, title, price, rating}) {
    return (
        <div className="CheckoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />
            <div className="product__infro">
                <p className="checkoutProduct__title">
                {title}

                </p>
                <p className="checkoutProduct__price">
                    <small> $</small>
                    <strong> {price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                        {Array({rating})
                             .fill()
                             .map((_, i) => (
                            <p> <StarIcon/> </p>
                        ))}
                </div>
                <button> Remove from Basket</button>
            </div>
        </div>
    
    )


}

export default CheckoutProduct