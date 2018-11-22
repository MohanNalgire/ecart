import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path:'productDetails',
    component:ProductDetailsComponent
  },
  {
    path:'productList',
    component:ProductListComponent
  },
  {
    path:'',
    component:ProductComponent
  }
];

@NgModule({
  declarations:[ProductComponent,ProductDetailsComponent,ProductListComponent],
  imports: [CommonModule,FormsModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
