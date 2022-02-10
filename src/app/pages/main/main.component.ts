import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  list:any[]= [
    { 'src': 'https://unsplash.com/photos/AFR80W_pT8o/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Njl8fGVtYnJvaWRlcnl8ZW58MHx8fHwxNjQzNDY4NDc3&force=true&w=640', 'alt': 'imagen test', 'title': 'Bordados a Mano', 'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum libero totam blanditiis! Nobis inventore, incidunt quo rerum similique corrupti adipisci ea sequi. At dolores, mollitia omnis totam hic sequi temporibus!'},
    { 'src': 'https://unsplash.com/photos/5hvn-2WW6rY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQzNTA5ODkz&force=true&w=640', 'alt': 'imagen test', 'title': 'Bordados a Mano', 'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum libero totam blanditiis! Nobis inventore, incidunt quo rerum similique corrupti adipisci ea sequi. At dolores, mollitia omnis totam hic sequi temporibus!'},
    { 'src': 'https://unsplash.com/photos/5hvn-2WW6rY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQzNTA5ODkz&force=true&w=640', 'alt': 'imagen test', 'title': 'Bordados a Mano', 'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum libero totam blanditiis! Nobis inventore, incidunt quo rerum similique corrupti adipisci ea sequi. At dolores, mollitia omnis totam hic sequi temporibus!'},
  ]

  cardlrlist:any[] = [
    { 'imgPosition': 'left', 'src': 'https://unsplash.com/photos/5hvn-2WW6rY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQzNTA5ODkz&force=true&w=640', 'alt': 'imagen test', 'title': 'Bordados a Mano', 'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum libero totam blanditiis! Nobis inventore, incidunt quo rerum similique corrupti adipisci ea sequi. At dolores, mollitia omnis totam hic sequi temporibus!'},
    { 'imgPosition': 'rigth', 'src': 'https://unsplash.com/photos/5hvn-2WW6rY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQzNTA5ODkz&force=true&w=640', 'alt': 'imagen test', 'title': 'Bordados a Mano', 'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum libero totam blanditiis! Nobis inventore, incidunt quo rerum similique corrupti adipisci ea sequi. At dolores, mollitia omnis totam hic sequi temporibus!'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
