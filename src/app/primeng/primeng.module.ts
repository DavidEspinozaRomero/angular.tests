import { NgModule } from '@angular/core';

import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@NgModule({
  exports: [
    MenubarModule,
    MenuItem,
  ]
})
export class PrimengModule { }
