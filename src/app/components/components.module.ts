import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardComponent } from './card/card.ts';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    CardComponent,

  ]
})
export class ComponentsModule { }
