import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from '../product/product.component';
import { ProductsDashboardComponent } from '../products-dashboard/products-dashboard.component';
import { AdminComponent } from '../admin/admin.component';
import { CartComponent } from '../cart/cart.component';

import { ProductDetailsComponent } from '../product/product-details/product-details.component';

//Routes for only main module
const routes: Routes = [
  {
    path:'',
    redirectTo:'productDashboard',
    pathMatch:'full'
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
  },
  {
    path: '**', component: ProductsDashboardComponent
  } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
