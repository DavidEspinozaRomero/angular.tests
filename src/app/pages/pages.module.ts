import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';



@NgModule({
  declarations: [
    ProductsComponent,
    MainComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
