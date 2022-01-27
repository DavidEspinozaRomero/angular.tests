import { NgModule } from '@angular/core';

// import {MenubarModule} from 'primeng/menubar';
// import {MenuItem} from 'primeng/api';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api

@NgModule({
  exports: [
    MenubarModule,
    MenuItem,
  ]
})
export class PrimengModule { }
