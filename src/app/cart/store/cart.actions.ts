import { Action } from '@ngrx/store'
import { Cart } from '../models/cart.model';



export const CART_PRODUCT_LOAD    = '[CART_PRODUCT] LOAD';
export const CART_PRODUCT_ADD     = '[CART_PRODUCT] ADD';
export const CART_PRODUCT_REMOVE  = '[CART_PRODUCT] REMOVE';
export const CART_PRODUCT_UPDATE  = '[CART_PRODUCT] UPDATE';


export class LoadCartProduct implements Action{
    readonly type = CART_PRODUCT_LOAD
    constructor(public payload: Cart){}
} 

export class AddCartProduct implements Action {  
    readonly type = CART_PRODUCT_ADD
    constructor(public payload: number){}
}

export class RemoveCartProduct implements Action {  
    readonly type = CART_PRODUCT_REMOVE
    constructor(public payload: number){}
}

export class UpdateCartProduct implements Action {
    readonly type = CART_PRODUCT_UPDATE
    constructor(public payload:number){}
}

export type Actions = AddCartProduct | RemoveCartProduct | UpdateCartProduct | LoadCartProduct;  