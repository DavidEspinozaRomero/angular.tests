import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() images: any = []

  image:string = this.images[0].url
  
  constructor() { }

  ngOnInit(): void {
  }

  getImg(item: any) {
    this.image = item.url
  }
}
