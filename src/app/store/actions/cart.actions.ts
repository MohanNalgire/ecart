import { Action } from '@ngrx/store';

export enum CartActionTypes {
  LoadCarts = '[Cart] Load Carts'
}

export class LoadCarts implements Action {
  readonly type = CartActionTypes.LoadCarts;
}

export type CartActions = LoadCarts;
