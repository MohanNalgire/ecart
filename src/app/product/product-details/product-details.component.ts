import { Component, OnInit,Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

//Service 
import { ProductService }  from '../../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
@Input() product;

@Output() gotoparent = new EventEmitter();

  constructor(private productservice:ProductService) { }

  createProduct(){
  if(this.product.id)
  {
   this.productservice.updateProduct(this.product)
  }
else
  {
   this.productservice.createProduct(this.product.title,this.product.description);
  }

  this.gotoparent.emit();
}

  ngOnInit() {
  }

}
