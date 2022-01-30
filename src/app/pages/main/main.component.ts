import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  list:any[]= [
    { 'src': '../../../../assets/rose.jpg', 'alt': 'imagen test', 'title': 'Bordados a Mano', 'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum libero totam blanditiis! Nobis inventore, incidunt quo rerum similique corrupti adipisci ea sequi. At dolores, mollitia omnis totam hic sequi temporibus!'},
    { 'src': '../../assets/rose.jpg', 'alt': 'imagen test', 'title': 'Bordados a Mano', 'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum libero totam blanditiis! Nobis inventore, incidunt quo rerum similique corrupti adipisci ea sequi. At dolores, mollitia omnis totam hic sequi temporibus!'},
    { 'src': '../../assets/rose.jpg', 'alt': 'imagen test', 'title': 'Bordados a Mano', 'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum libero totam blanditiis! Nobis inventore, incidunt quo rerum similique corrupti adipisci ea sequi. At dolores, mollitia omnis totam hic sequi temporibus!'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
