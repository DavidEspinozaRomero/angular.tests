import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    SidebarComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
  ],
  exports:[
    SidebarComponent,
    MenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
