import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() src?: string;
  @Input() alt?: string;
  @Input() title?: string;
  @Input() description?: string;
  @Input() routerLink?: string;
  
  constructor() {}

  ngOnInit(): void {}
}
