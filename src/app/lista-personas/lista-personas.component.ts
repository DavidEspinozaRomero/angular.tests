import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.scss']
})
export class ListaPersonasComponent implements OnInit {
  title:String = "Listado de Personas"

  persons: Person[] = [
    new Person("Maca" , "Gomez"),
    new Person("Juan" , "Perez")
  ]

  firstName:string="";
  lastName:string="";
  
  addPerson = () => {
    this.persons.push(new Person(this.firstName,this.lastName))
    console.log(this.persons);
    
  }
  constructor() { }
  ngOnInit(): void {
  }

}
