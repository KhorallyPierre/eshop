export const initialState = {
    basket: [],
}

//Selector

const getBasketTotal  = (basket) => {
    // this line of code uses the reduce array method to increment 'item', which then becomes the total amount
    return(basket?.reduce((amount,item) => item.price + amount, 0));
}

export default getBasketTotal