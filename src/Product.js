import React from "react";
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';

function Product() {
    return (
    <div>
        <div className="product">
            <div className="product__info">
                <p> Schuyler Medium Dome Satchel</p>
                <p className="product__price">
                    <small> $</small>
                    <strong> 109</strong>
                </p>
                <div className="product__rating">
                    <StarIcon/>
                    <StarIcon/>
                </div>
                <img src="https://images.katespade.com/is/image/KateSpade/K8701_300?$desktopProductZoom$"
                alt="product-image" />
                <button> Add to Basket </button>
            </div>
        </div>
    </div>
    
    )
}

export default Product