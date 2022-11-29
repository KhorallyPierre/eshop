import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div> 
            <div className="home">
                <div className="home__container">
                <img src="https://images.unsplash.com/photo-1607082352121-fa243f3dde32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="" className="home__image" />
               <div className="home__row">
                
                    <Product
                    id="123"
                    title="Schuyler Medium Dome Satchel" 
                    price={11.96}
                    rating ={3}
                    image="https://images.katespade.com/is/image/KateSpade/K8701_300?$desktopProductZoom$"
                    alt="product-image"
                    />
                    <Product
                    id="12345678"
                    title="Garden Delights II" 
                    price={189.96}
                    rating ={5}
                    image="https://cdn.shopify.com/s/files/1/0082/5619/2602/products/gardendelights2_08_800x800.jpg?v=1639318169"
                    alt="product-image"
                    />
                  
               </div>
               <div className="home__row">
               <Product
                    id="1234"
                    title="Tommy Hilfiger Men's Quilted Puffer Jacket" 
                    price={225.99}
                    rating ={4}
                    image="https://slimages.macysassets.com/is/image/MCY/products/6/optimized/22855276_fpx.tif?op_sharpen=1&wid=1200&fit=fit,1&$filtersm$&fmt=webp"
                    alt="product-image"
                />
                <Product
                    id="12345"
                    title="Luxury Cologne Sampler Set" 
                    price={40.00}
                    rating ={1}
                    image="https://slimages.macysassets.com/is/image/MCY/products/1/optimized/23207841_fpx.tif?op_sharpen=1&wid=1200&fit=fit,1&$filtersm$&fmt=webp"
                    alt="product-image"
                />
               <Product
                    id="123456"
                    title="Monroe II Upholstered Queen Bed" 
                    price={700.00}
                    rating ={5}
                    image="https://slimages.macysassets.com/is/image/MCY/products/8/optimized/9098078_fpx.tif?op_sharpen=1&wid=1200&fit=fit,1&$filtersm$&fmt=webp"
                    alt="product-image"
                />
               </div>

               <div className="home__row">
               <Product
                    id="1234567"
                    title="5.3-Qt. 300-Watt Tilt-Head 12-Speed Stand Mixer" 
                    price={199.99}
                    rating ={2}
                    image="https://slimages.macysassets.com/is/image/MCY/products/8/optimized/22522518_fpx.tif?op_sharpen=1&wid=1200&fit=fit,1&$filtersm$&fmt=webp"
                    alt="product-image"
                />
               </div>
                </div>
            </div>
        </div>
    )
}

export default Home
