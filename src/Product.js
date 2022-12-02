import React from "react";
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';
import {useStateValue} from "./StateProvider";

function Product({id, title, image, price, rating}) {
    const [state, dispatch] = useStateValue();
    //when add to basket button is used, dispatch method 
    const addToBasket= () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
                id: id, 
                image: image,
                price: price,
                rating: rating
            },
        });
    };
    
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
                        <p key={i}> <StarIcon/> </p>
                    ))}
                    
                </div>
                <img src={image} alt="" />
                <button onClick={addToBasket}> Add to Basket </button>
            </div>
        </div>
    </div>
    
    )
}

export default Product