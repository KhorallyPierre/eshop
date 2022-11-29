import React from "react";
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';

function Product({id, title, image, price, rating}) {
    return (
    <div>
        <div className="product">
            <div className="product__info">
                <p> {title}</p>
                <p className="product__price">
                    <small> $</small>
                    <strong> {price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    // fills specified elements in an array with a value. Overwrites the original array
                    .fill()
                    // underscore means each and every item in the array
                    .map((_, i) => (
                        <p> <StarIcon/> </p>
                    ))}
                    
                </div>
                <img src={image} />
                <button> Add to Basket </button>
            </div>
        </div>
    </div>
    
    )
}

export default Product