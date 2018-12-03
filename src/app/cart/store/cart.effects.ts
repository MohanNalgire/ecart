import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
//ngrx
import { Action } from '@ngrx/store';
import { Actions, Effect } from "@ngrx/effects";
import ActionWithPayload from './ActionWithPayload';
import {
CART_PRODUCT_LOAD,
CART_PRODUCT_LOAD_ERROR,

CART_PRODUCT_ADD,
CART_PRODUCT_REMOVE,
CART_PRODUCT_UPDATE,

CartLoadSuccess,
CartError,


} from './cart.actions';

//rxjs
import { of, Observable } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { Cart } from "../models/cart.model";



@Injectable()


export class CartEffects {
    private ApiURL: string = 'http://localhost:3000/cartProducts';
    constructor(
        private httpclient:HttpClient,
        private action$: Actions
        ){}

    @Effect() //https://medium.com/@RupaniChirag/simple-app-using-ngrx-store-3bbb97b08c04
    GetCartProductsList$:Observable<Action>=this.action$
    .ofType<any>(CART_PRODUCT_LOAD)
    .pipe(
        mergeMap(action=>
            this.httpclient.get(this.ApiURL)
            .pipe(
                map(data=>{
                    console.log('test data',data);
                    return new CartLoadSuccess(data as Cart);
                }),
                catchError(error => {
                    console.error('Http Call Error: ', error);
                    return of(new CartError(CART_PRODUCT_LOAD_ERROR, error.message));
                  })
                )
        )
    );

    //AddCartProducts$:Observable<Action>

    //RemoveCartProducts$:Observable<Action>
}