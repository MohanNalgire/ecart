import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from './services/cart.service';

import { Cart } from './models/cart.model';
import { Observable, interval, pipe } from "rxjs";
import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { CartState } from './store/cart.state';
import * as CartActions from "./store/cart.actions";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  //Class properties declaration.
  cartcount: number = 0;
  //for service
  cartProducts: any;
  selectedData: any;

  //for store
  //cartProducts: Observable<Cart[]>;

  productUrl: string = 'http://localhost:3000/products';
  cartProductUrl: string = 'http://localhost:3000/cartProducts';

  constructor(
    private httpclient: HttpClient,
    private cartservice: CartService,
    private store: Store<CartState>
  ) {
    //this.cartProducts = store.select('cart');//StoreModule.forRoot({cart: reducer}) defined
  }

  ngOnInit() {
    this.getCartProducts();
  }

  getCartProducts() {
    this.httpclient.get(this.cartProductUrl)
      .subscribe(
        (res) => {

          this.cartProducts = res;
          this.cartcount = Object.keys(res).length;
          console.log('mycart', this.cartProducts);
        },
        function (error) {
          console.error(error);
        },
        function () {
          console.log('completed subscription.');
        }
      );

  }

  removeCartItem(cartProductId) {
    this.cartservice.removeCartItem(cartProductId).subscribe(
      (data) => {
        console.log('removeCartItem Data:', data);
        //update view template.
        this.getCartProducts();
      },
      (error) => {
        console.error('removeCartItem error:', error);
      },
      () => { console.info('cremoveCartItem completed.'); }
    );
  }



  getCartProductById(cartProductId) {

  }

  addCartProductQuantity(cartProductId) {
    //this.store.dispatch(new CartActions.AddCartProduct(cartProductId));

    this.cartservice.getCartProductById(cartProductId)
      .subscribe(
        (result) => {
          console.log('cartservice.getCartProductById', result.quantity);
          let selectedproduct = result;
          selectedproduct.quantity += 1;
          selectedproduct.quantityPrice = (selectedproduct.quantity > 0) ? selectedproduct.quantity * selectedproduct.price : selectedproduct.quantityPrice = 0;

          console.log('selected product for addCartProductQuantity', selectedproduct);
          this.cartservice.updateCartItem(cartProductId, selectedproduct)
            .subscribe(
              (data) => { console.log('completed update.', data); },
              (error) => { console.error('update service error.', error); },
              () => { console.log('completed update service'); }
            );

        },
        () => { }
      );
    //update view template.
    this.getCartProducts();

  }

  removeCartProductQuantity(cartProductId) {
    this.cartservice.getCartProductById(cartProductId)
      .subscribe(
        (result) => {
          let selectedproduct = result;
          selectedproduct.quantity -= 1;
          selectedproduct.quantityPrice = (selectedproduct.quantity > 0) ? selectedproduct.quantity * selectedproduct.price : selectedproduct.quantityPrice = 0;

          console.log('cartservice.getCartProductQuantity', selectedproduct.price);
          this.cartservice.updateCartItem(cartProductId, selectedproduct)
            .subscribe(
              (data) => { console.log('completed update.', data); },
              (error) => { console.error('update service error.', error); },
              () => { console.log('completed update service'); }
            )
        },
        () => { }
      );
    //update view template.
    this.getCartProducts();
  }

  ngOnDestroy() {

  }
}
