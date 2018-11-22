import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';

const routes: Routes = [
  {
    path:'adminList',
    component:AdminListComponent
  },
  {
    path:'adminDetails',
    component:AdminDetailsComponent
  },
  {
    path:'',
    component:AdminComponent
  }
];

@NgModule({
  declarations:[AdminComponent,AdminListComponent,AdminDetailsComponent],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
