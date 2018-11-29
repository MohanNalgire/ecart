import { Action } from '@ngrx/store'
import { Cart } from '../models/cart.model';


export enum CartActionTypes {  
    CART_PRODUCT_ADD     = 'CART_PRODUCT_ADD',
    CART_PRODUCT_REMOVE  = 'CART_PRODUCT_REMOVE',
    CART_PRODUCT_UPDATE  = 'CART_PRODUCT_UPDATE'
}

export class AddProduct implements Action {  
    readonly type = CartActionTypes.CART_PRODUCT_ADD
    constructor(public payload: any){}
}

export class RemoveProduct implements Action {  
    readonly type = CartActionTypes.CART_PRODUCT_REMOVE
    constructor(public payload: any){}
}

export class UpdateProduct implements Action {
    readonly type = CartActionTypes.CART_PRODUCT_UPDATE
    constructor(public payload:any){}
}

export type CartActions = AddProduct | RemoveProduct | UpdateProduct;  