import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() src?:string
  @Input() alt?:string
  @Input() title?:string
  @Input() description?:string

  constructor() { }

  ngOnInit(): void {
  }

}
