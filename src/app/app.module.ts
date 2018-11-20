import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//Services 
import { ProductService } from './product.service';

//product
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';

//router 
import {RouterModule } from '@angular/router';

//admin
import { AdminComponent } from './admin/admin.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminDetailsComponent } from './admin/admin-details/admin-details.component';

//header footer
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//cart
import { CartComponent } from './cart/cart.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';


@NgModule({
  declarations: [
    AppComponent,
    
    ProductDetailsComponent,
    ProductComponent,
    CartComponent,
    ProductsDashboardComponent,
    AdminComponent,
    HeaderComponent,
    ProductListComponent,
    FooterComponent,
    CartListComponent,
    CartDetailsComponent,
    AdminListComponent,
    AdminDetailsComponent
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
