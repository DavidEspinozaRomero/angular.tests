import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';


// import { AppRoutingModule } from './app.routing';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

// import env from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PagesRoutingModule,
    SharedModule,
    PagesModule,

  ],
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }     
