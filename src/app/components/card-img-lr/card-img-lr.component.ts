import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card-img-lr',
  templateUrl: './card-img-lr.component.html',
  styleUrls: ['./card-img-lr.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CardImgLrComponent implements OnInit {
  
  @Input() src?:string
  @Input() alt?:string
  @Input() title?:string
  @Input() description?:string
  @Input() imgPosition?:string
  @Input() routerLink?:string

  constructor() { }

  ngOnInit(): void {
  }

}
