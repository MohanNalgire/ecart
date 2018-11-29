import { CartActionTypes, CartActions } from "./cart.actions";


export let initialState = [];

export function reducer(state=initialState, action: CartActions) {  
    switch (action.type) {
        case CartActionTypes.CART_PRODUCT_ADD: 
            return [...state, action.payload];
        case CartActionTypes.CART_PRODUCT_REMOVE: 
            let product = action.payload;        
            return state.filter((el)=>el.id != product.id);
        case CartActionTypes.CART_PRODUCT_UPDATE:
            return [...state,action.payload];
        default: 
            return state
    }
}