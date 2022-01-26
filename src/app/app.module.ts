import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnComponent } from './btn/btn.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { BtnSumComponent } from './btn-sum/btn-sum.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    CalculadoraComponent,
    InputNumberComponent,
    BtnSumComponent,
    ListaPersonasComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }     
