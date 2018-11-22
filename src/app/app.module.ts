import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//Services 
import { ProductService } from './product.service';

//product
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';


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

//router Module
import { AppRoutingRoutingModule } from './_sharedModules/app-routing-routing.module';

//Environment 
import { environment } from './../environments/environment';

//NgRx Modules
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducers, metaReducers } from './store/reducers';
import { AppEffects } from './store/effects/app.effects';
import { AuthEffects } from './store/effects/auth.effects';
import { CartEffects } from './store/effects/cart.effects';

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
    //routingModule
    AppRoutingRoutingModule,
    //NgRx StoreModule
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects, AuthEffects, CartEffects]),
    
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
