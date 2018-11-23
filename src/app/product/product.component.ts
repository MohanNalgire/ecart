import { Component, OnInit } from '@angular/core';

import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ngOnInit() {
  }

  title = 'app';

  products=[];

  productToUpdate;

showdialog=false;

  constructor(private productservice:ProductService) {

    this.getProducts();
  }

  showbutton(product)
  {
    if(product)
    {
    this.productToUpdate=product;
    }
    else{
      this.productToUpdate={};
    }
    this.showdialog=true;
  }

hidecomponent()
{
  this.showdialog=false;
}


  getProducts()
  {
    this.productservice.getProducts();
  }

  DeleteProduct(product)
  {
    this.productservice.DeleteProduct(product);
  }

}
