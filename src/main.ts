import { enableProdMode, importProvidersFrom } from '@angular/core';
import {
  BrowserModule,
  bootstrapApplication,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routing';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      CarouselModule.forRoot()
    ),
    provideClientHydration(),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
