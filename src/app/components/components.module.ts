import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardImgLrComponent } from './card-img-lr/card-img-lr.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
// import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    CardImgLrComponent,
    CarouselComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // PrimengModule,
  ],
  exports:[
    CardImgLrComponent,
    CarouselComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
