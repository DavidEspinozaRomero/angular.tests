import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-sum',
  templateUrl: './btn-sum.component.html',
  styleUrls: ['./btn-sum.component.scss']
})
export class BtnSumComponent implements OnInit {

  a:number = 0;
  numberB:number = 0;
  r:number = 0;

  sum():void {
    this.r = this.a + this.numberB;
    console.log(this.r);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
