import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CartComponent } from './cart.component';
import { CartListComponent } from './cart-list/cart-list.component';

const routes: Routes = [
  {
    path:'cartDetails',
    component:CartDetailsComponent
  },
  {
    path:'cartList',
    component:CartListComponent
  },
  {
    path:'',
    component:CartComponent
  }
];

@NgModule({
  declarations:[CartComponent,CartDetailsComponent,CartListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
