import { NgModule } from '@angular/core';

import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';

@NgModule({
  exports: [
    MenubarModule,
    CardModule,
  ]
})
export class PrimengModule { }
