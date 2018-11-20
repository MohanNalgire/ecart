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

//router 
import {RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    
    
    
    ProductDetailsComponent,
    ProductComponent,
    CartComponent,
    ProductsDashboardComponent,
    AdminComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot([
      {
        path:'',
        component:ProductsDashboardComponent
      },
      {
        path:'admin',
        component:AdminComponent
      },
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'productDetails',
        component:ProductDetailsComponent
      },
      {
        path:'productDashboard',
        component:ProductsDashboardComponent
      },
      {
        path:'cart',
        component:CartComponent
      }
    ])
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
