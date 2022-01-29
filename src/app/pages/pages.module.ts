import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ComponentsModule } from '../componentes/components.module';
import { ProductsComponent } from './products/products.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PrimengModule } from '../primeng/primeng.module';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    ProductsComponent,
    MainComponent,
    ContactComponent,
    BlogComponent,
    GalleryComponent
  ],
  exports:[

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    PrimengModule,
  ]
})
export class PagesModule { }
