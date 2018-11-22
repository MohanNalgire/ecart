import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAuth from './auth.reducer';
import * as fromCart from './cart.reducer';

export interface State {

  auth: fromAuth.State;
  cart: fromCart.State;
}

export const reducers: ActionReducerMap<State> = {

  auth: fromAuth.reducer,
  cart: fromCart.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
