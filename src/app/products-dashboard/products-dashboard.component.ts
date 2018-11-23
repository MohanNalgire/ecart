import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/services/product.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router }  from  '@angular/router';

//services
import { CartService } from '../cart/services/cart.service';
//rxjs
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.css']
})
export class ProductsDashboardComponent implements OnInit {
  productsList:any=[];
  productById:any={};
  cartIteamCount:number;

  productUrl:string= 'http://localhost:3000/products';
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //'Authorization': 'my-auth-token'
    })
  };

  public getProductbyid:any;
  public 

  constructor(
    private httpclient:HttpClient,
    private productservice:ProductService,
    private router:Router,
    private cartservice:CartService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.getCountOfCartProduct();
  }

  getProducts()
  {
    this.httpclient.get(this.productUrl)
            .subscribe(
              (result) => {
                this.productsList = result;
            },
            (error)=>{
              console.error('Service getProducts is down.',error);
            }
            )
  }


  getProductById(product_id)
  {
    this.cartIteamCount +=1;
    console.log('cart count',this.cartIteamCount);

    return this.httpclient.get(`${this.productUrl}/${product_id}`);
    

  }

  addToCart(product_id){
    
    this.getProductById(product_id)
    .subscribe(
      (data)=>{
        if(data){
          this.httpclient.post(this.productUrl,data,this.httpOptions)
          .subscribe(
            (data)=>{
              console.log("POST Request is successful ", data);
            },
            (error)=>{
              console.error("Error", error);
            }
          );
        }
      },
      (error)=>{
        console.error('getProductById',error);
      },
      ()=>{
        console.info('call to getProductById method completed.');
      }
    );
    //this.httpclient.post('http://localhost:3000/cartProducts',,{});
  }


  goToCart(){
    this.router.navigateByUrl('/cart');
  }

  getCountOfCartProduct()
  {
      this.cartservice.getCartProducts()
      .subscribe(
        (res)=> {
        this.cartIteamCount= Object.keys(res).length;
        console.log('mycart',this.cartIteamCount);
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
