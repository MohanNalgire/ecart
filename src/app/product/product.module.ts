import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
//Services 
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers:[
    ProductService
  ]
})
export class ProductModule { }
