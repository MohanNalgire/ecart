import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductsDashboardComponent } from '../products-dashboard/products-dashboard.component';


import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

//Routes for only main module
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: '../admin/admin.module#AdminModule'
  },
  {
    path: 'product',
    loadChildren: '../product/product.module#ProductModule'
  },
  {
    path: 'productDashboard',
    component: ProductsDashboardComponent
  },
  {
    path: 'cart',
    loadChildren: '../cart/cart.module#CartModule'
  },
  {
    path: '',
    redirectTo: 'productDashboard',
    pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];


@NgModule({
  //The set of components, directives, and pipes (declarables) that belong to this module.
  declarations:[],
  //The set of NgModules whose exported declarables are available to templates in this module.
  imports: [
    RouterModule.forRoot(
      routes 
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  //The set of components, directives, and pipes declared in this NgModule that can be used in the template of any component that is part of an NgModule that imports this NgModule. Exported declarations are the module's public API.
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
