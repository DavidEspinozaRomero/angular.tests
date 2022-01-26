import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardImgLrComponent } from './card-img-lr/card-img-lr.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CardImgLrComponent,
    CarouselComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
