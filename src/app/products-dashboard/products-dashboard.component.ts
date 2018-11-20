import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router }  from  '@angular/router';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.css']
})
export class ProductsDashboardComponent implements OnInit {
  productsList:any=[];

  cartIteamCount:number=0;

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
    console.log('test');
    this.httpclient.get('http://localhost:3000/products')
            .subscribe((result) => {
              console.log(result);
                this.productsList = result;
            })

    console.log( typeof this.productsList);
  }

  addToCart(product_id){

    console.log(`Our cart product id is ${product_id}`);

    this.cartIteamCount +=1;
    console.log('cart count',this.cartIteamCount);
  }


  goToCart(){
    this.router.navigateByUrl('/cart');
  }
}
