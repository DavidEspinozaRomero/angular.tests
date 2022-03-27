import { Component, OnInit, Input } from '@angular/core';
import { FunctionsService } from '../../core/services/functions.service';

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
  @Input() routerLink?:string
  sw = this.functionsService.sw
  constructor(private functionsService:FunctionsService) { }

  ngOnInit(): void {
  console.log(this.sw);
  
  }

}
