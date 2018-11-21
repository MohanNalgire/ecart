import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from './cart.service';

import { Observable, interval, pipe } from "rxjs";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //Class properties declaration.
  cartcount:number=0;
  cartProducts:any;
  selectedData:any;

  constructor(
    private httpclient:HttpClient,
    private cartservice:CartService
  ) { }

  ngOnInit() {
    this.getCartProducts();
  }

  getCartProducts(){
    this.httpclient.get('http://localhost:3000/cartProducts')
    .subscribe(
      (res)=> {
      this.cartProducts=res;
      this.cartcount= Object.keys(res).length;
      console.log('mycart',this.cartProducts);
    },
    function(error){
      console.error(error);
    },
    function(){
      console.log('completed subscription.');
    }
    );
    
  }

  removeCartItem(cartProductId)
  {
    this.cartservice.removeCartItem(cartProductId).subscribe();
  }



  getCartProductById(cartProductId)
  {
    this.cartservice.getCartProductById(cartProductId)
    .pipe(
      map(
        (data)=>{
          console.log('Method getCartProductById - data:',data);
          this.selectedData=data;
        })
    ).subscribe(result => {
      console.log(result);
    });
  }

  addCartProductQuantity(cartProductId)
  {
    this.getCartProductById(cartProductId);
    let selectedproduct = this.selectedData;
    selectedproduct.quantity += 1;
    console.log('selected product for addCartProductQuantity',selectedproduct);

    this.cartservice.updateCartItem(cartProductId,selectedproduct);
    console.log('test');
  }

  removeCartProductQuantity(cartProductId)
  {

  }

  
}
