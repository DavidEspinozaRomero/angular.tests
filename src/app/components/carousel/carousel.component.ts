import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images: any =[
    {
      url:'https://unsplash.com/photos/uwRt8jrjZTY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ0NTQwNjYy&force=true&w=640',
      alt:'test',
      title:'test'
    },
    {
      url:'https://unsplash.com/photos/AFR80W_pT8o/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Njl8fGVtYnJvaWRlcnl8ZW58MHx8fHwxNjQzNDY4NDc3&force=true&w=640',
      alt:'test',
      title:'test'
    },
    {
      url:'https://unsplash.com/photos/DEmEaME-8do/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NDd8fGVtYnJvaWRlcnl8ZW58MHx8fHwxNjQ0NTQwNDk0&force=true&w=640',
      alt:'test',
      title:'test'
    },
    {
      url:'https://unsplash.com/photos/uwRt8jrjZTY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ0NTQwNjYy&force=true&w=640',
      alt:'test',
      title:'test'
    },
    {
      url:'https://unsplash.com/photos/AFR80W_pT8o/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Njl8fGVtYnJvaWRlcnl8ZW58MHx8fHwxNjQzNDY4NDc3&force=true&w=640',
      alt:'test',
      title:'test'
    },
    {
      url:'https://unsplash.com/photos/DEmEaME-8do/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NDd8fGVtYnJvaWRlcnl8ZW58MHx8fHwxNjQ0NTQwNDk0&force=true&w=640',
      alt:'test',
      title:'test'
    },
    {
      url:'https://unsplash.com/photos/uwRt8jrjZTY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ0NTQwNjYy&force=true&w=640',
      alt:'test',
      title:'test'
    },
    {
      url:'https://unsplash.com/photos/AFR80W_pT8o/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Njl8fGVtYnJvaWRlcnl8ZW58MHx8fHwxNjQzNDY4NDc3&force=true&w=640',
      alt:'test',
      title:'test'
    },
    {
      url:'https://unsplash.com/photos/DEmEaME-8do/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NDd8fGVtYnJvaWRlcnl8ZW58MHx8fHwxNjQ0NTQwNDk0&force=true&w=640',
      alt:'test',
      title:'test'
    },
  ]

  image:string = this.images[0].url
  
  constructor() { }

  ngOnInit(): void {
  }

  getImg(item: any) {
    this.image = item.url
  }
}
