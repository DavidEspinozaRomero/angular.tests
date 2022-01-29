import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  list:any[]= [
    { 'src': 'https://images.unsplash.com/photo-1629804190724-ece12511fc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80', 'alt': 'imagen test', 'title': 'Bordados a Mano', 'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum libero totam blanditiis! Nobis inventore, incidunt quo rerum similique corrupti adipisci ea sequi. At dolores, mollitia omnis totam hic sequi temporibus!'},
    { 'src': 'https://images.unsplash.com/photo-1629804190724-ece12511fc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80', 'alt': 'imagen test', 'title': 'Bordados a Mano', 'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum libero totam blanditiis! Nobis inventore, incidunt quo rerum similique corrupti adipisci ea sequi. At dolores, mollitia omnis totam hic sequi temporibus!'},
    { 'src': 'https://images.unsplash.com/photo-1629804190724-ece12511fc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80', 'alt': 'imagen test', 'title': 'Bordados a Mano', 'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum libero totam blanditiis! Nobis inventore, incidunt quo rerum similique corrupti adipisci ea sequi. At dolores, mollitia omnis totam hic sequi temporibus!'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
