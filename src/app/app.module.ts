import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
//Services 
import { ProductService } from './product.service';


import { AppComponent } from './app.component';


import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    
    
    
    ProductDetailsComponent,
    ProductComponent,
    CartComponent,
    ProductsDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
