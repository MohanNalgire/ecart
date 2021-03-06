import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartcount:number=0;

  cartProducts:any;
  
  constructor(
    private httpclient:HttpClient
  ) { }

  ngOnInit() {
    this.getCartProducts();
  }

  getCartProducts(){
    this.httpclient.get('http://localhost:3000/cartProducts')
    .subscribe(
      (res)=> {
      this.cartProducts=res;
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

}
