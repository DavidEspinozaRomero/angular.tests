import { NgModule } from '@angular/core';

import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  exports: [
    MenubarModule,
    CardModule,
    GalleriaModule,
  ]
})
export class PrimengModule { }
