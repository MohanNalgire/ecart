import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router }  from  '@angular/router';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.css']
})
export class ProductsDashboardComponent implements OnInit {
  productsList:any=[];
  productById:any={};
  cartIteamCount:number=0;
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //'Authorization': 'my-auth-token'
    })
  };

  public getProductbyid:any;

  constructor(
    private httpclient:HttpClient,
    private productservice:ProductService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts()
  {
    this.httpclient.get('http://localhost:3000/products')
            .subscribe((result) => {
                this.productsList = result;
            })
  }


  getProductById(product_id)
  {
    this.cartIteamCount +=1;
    console.log('cart count',this.cartIteamCount);

    return this.httpclient.get(`http://localhost:3000/products/${product_id}`);
    

  }

  addToCart(product_id){
    
    this.getProductById(product_id)
    .subscribe(
      (data)=>{
        if(data){
          this.httpclient.post('http://localhost:3000/cartProducts',data,this.httpOptions)
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
}
