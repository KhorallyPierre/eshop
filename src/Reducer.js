// this file will define all the application level states and define ations to make the changes to the state

import { Layers } from "@mui/icons-material"

export const initialState = {
    basket: [],
}

//Selector
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