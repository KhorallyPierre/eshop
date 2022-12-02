import React, {createContext, useContext, useReducer} from "react";

//this export prepares the data layer to be transfered elsewhere
export const StateContext = createContext();

// this wraps our data and prodives the data layer
export const StateProvider = ({reducer, initialState, children}) => {
    // reutnr statement is needed for information to be pulled from data layer
    return <StateContext.Provider value={useReducer(reducer, initialState)}> 
        {children} 
    </StateContext.Provider>
}; 

// this pulls information from the data layer

export const useStateValue = () => useContext(StateContext);