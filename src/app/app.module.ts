import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';


import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';

//header footer
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



//router Module
import { AppRoutingRoutingModule } from './_shared/app-routing.module';

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

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ErrorHandlerService } from './_shared/error-handler.service';
import { ProductService } from './product/services/product.service';

@NgModule({
  //The set of components, directives, and pipes (declarables) that belong to this module.
  declarations: [
    AppComponent,
    ProductsDashboardComponent,
    HeaderComponent,    
    FooterComponent,
    PageNotFoundComponent
  ],
  //The set of NgModules whose exported declarables are available to templates in this module.
  imports: [
    BrowserModule,
    CommonModule,

    FormsModule,
    HttpClientModule,
    //routingModule
    AppRoutingRoutingModule,
    //NgRx StoreModule
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects, AuthEffects, CartEffects]),
    
  ],
  //The set of injectable objects that are available in the injector of this module.
  providers: [
    ErrorHandlerService,
    ProductService
  ],
  //The set of components that are bootstrapped when this module is bootstrapped. 
  //The components listed here are automatically added to entryComponents.
  bootstrap: [AppComponent]
})
export class AppModule { }
