import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  message:string = 'No se agregado';
  show:boolean = false;
  title:string = 'Docente';

  addPerson = () => {
    this.message = 'agregado';
    this.show = !this.show;
  }
  
  // --- (input)
  changeTitle = (event:Event) => {
    console.log("entrando al metodo modificar titulo");
    this.title = (<HTMLInputElement>event.target).value
  }

  constructor() { }

  ngOnInit(): void {
  }

}
