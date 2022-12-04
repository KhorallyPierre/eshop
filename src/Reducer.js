// this file will define all the application level states and define ations to make the changes to the state

import { Layers } from "@mui/icons-material"

export const initialState = {
    basket: [],
}

//Selector

export const getBasketTotal  = (basket) => {
    // this line of code uses the reduce array method to increment 'item', which then becomes the total amount
    return(basket?.reduce((amount,item) => item.price + amount, 0));
}
// state has current state of layers, action makes changes to that state 
const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_BASKET":
        return {
            ...state,
            basket: [...state.basket, action.item]
        }
    }
}

export default reducer; 