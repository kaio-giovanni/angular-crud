import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { ProductCreateComponent } from './views/product-create/product-create.component';
import { ProductEditComponent } from './views/product-edit/product-edit.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "product",
  component: ProductComponent
},{
  path: "product/new",
  component: ProductCreateComponent
},{
  path: "product/edit/:id",
  component: ProductEditComponent
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
