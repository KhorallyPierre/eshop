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
                
                    <Product />
                    <Product />
                  
               </div>
               <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
               </div>
               <div className="home__row">
                    <Product />
               </div>
                </div>
            </div>
        </div>
    )
}

export default Home
