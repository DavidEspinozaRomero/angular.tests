import { Component, OnInit, Input } from '@angular/core';
import { FunctionsService } from '../../core/services/functions.service';

@Component({
  selector: 'app-card-img-lr',
  templateUrl: './card-img-lr.component.html',
  styleUrls: ['./card-img-lr.component.scss']
})
export class CardImgLrComponent implements OnInit {
  
  @Input() src?:string
  @Input() alt?:string
  @Input() title?:string
  @Input() description?:string
  @Input() imgPosition?:string
  @Input() routerLink?:string

  sw = this.functionsService.sw
  constructor(private functionsService:FunctionsService) { }

  ngOnInit(): void {
  }

}
