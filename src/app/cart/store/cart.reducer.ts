import { Action } from '@ngrx/store';
import { Cart } from "../models/cart.model";
import * as CartActions from "./cart.actions";

const initialState:Cart = {
    title: 'string',
    description: 'string',
    id: 0,
    price: 0,
    quantity: 0,
    quantityPrice:0,
    image: 'string'
};

export function reducer(state:Cart[] =[initialState], action: CartActions.Actions) {

    switch (action.type) {
        case CartActions.CART_PRODUCT_LOAD:
            return ({
                ...state, 
                Loaded:false,
                Loading:false
            });
        case CartActions.CART_PRODUCT_ADD:
            return ({
                ...state, 
                Loaded:false,
                Loading:false
            });
        case CartActions.CART_PRODUCT_REMOVE:
            
            return state;
        case CartActions.CART_PRODUCT_UPDATE:
            return ({
                ...state, 
                Loaded:false,
                Loading:false
            });
        default:
            return state
    }
}