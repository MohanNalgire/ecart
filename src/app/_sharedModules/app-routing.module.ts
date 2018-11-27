import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductsDashboardComponent } from '../products-dashboard/products-dashboard.component';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

//Routes for only main module
const routes: Routes = [
  {
    path:'admin',
    loadChildren:'../admin/admin.module#AdminModule'
    },
  {
    path:'product',
    loadChildren:'../product/product.module#ProductModule'
  },
  {
    path:'productDashboard',
    component:ProductsDashboardComponent
  },
  {
    path:'cart',
    loadChildren:'../cart/cart.module#CartModule'
  },
  {
    path:'',
    redirectTo:'productDashboard',
    pathMatch:'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  } 
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,{ enableTracing: true } // <-- debugging purposes only
      )
  ],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
