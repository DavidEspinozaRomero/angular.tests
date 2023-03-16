import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HashLocationStrategy,
  Location,
  LocationStrategy,
} from '@angular/common';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutComponent],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
