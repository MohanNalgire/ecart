import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.css']
})
export class ProductsDashboardComponent implements OnInit {
  productsList:any=[];

  constructor(
    private httpclient:HttpClient,
    private productservice:ProductService
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
}
