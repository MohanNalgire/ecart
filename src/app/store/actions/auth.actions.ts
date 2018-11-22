import { Action } from '@ngrx/store';
import { getFriendlyName } from '../reducers/auth.reducer';

export enum AuthActionTypes {
  LoadAuths = '[Auth] Load Auths',
  SetAuths = '[Auth] Set Auths'
}

export class LoadAuths implements Action {
  readonly type = AuthActionTypes.LoadAuths;
}

export interface SetAuthsPayLoad {
  userName:string;
  friendlyName:string;
}

export class SetAuths implements Action {
  readonly type = AuthActionTypes.SetAuths;

  constructor(public payload:SetAuthsPayLoad){}

}

export type AuthActions = LoadAuths | SetAuths;
