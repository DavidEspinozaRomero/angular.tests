import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    ProductsComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
