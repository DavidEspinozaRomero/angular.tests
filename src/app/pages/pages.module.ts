import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { ComponentsModule } from '../components/components.module';

import { ProductsComponent } from './products/products.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BordadosamanoComponent } from './products/bordadosamano/bordadosamano.component';
import { BordadosamaquinaComponent } from './products/bordadosamaquina/bordadosamaquina.component';
import { BordadospuntodecruzComponent } from './products/bordadospuntodecruz/bordadospuntodecruz.component';
import { NosotrosComponent } from './nosotros/nosotros.component';



@NgModule({
  declarations: [
    ProductsComponent,
    MainComponent,
    ContactComponent,
    BlogComponent,
    GalleryComponent,
    BordadosamanoComponent,
    BordadosamaquinaComponent,
    BordadospuntodecruzComponent,
    NosotrosComponent,
  ],
  exports:[

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    PrimengModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
