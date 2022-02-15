import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardImgLrComponent } from './card-img-lr/card-img-lr.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardImgLrComponent,
    CarouselComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    CardImgLrComponent,
    CarouselComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
