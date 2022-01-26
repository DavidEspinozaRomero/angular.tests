import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  a:number = 0;
  numberB:number = 0;
  r:number = 0;

  sum():void {
    this.r = this.a + this.numberB;
    console.log(this.r);
  }
  
  rest = ():void => {
    // this.result = this.numberA - this.numberB;
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
