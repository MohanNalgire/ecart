import { Cart } from '../models/cart.model';

export interface CartState {
    readonly cart:Cart[];
}