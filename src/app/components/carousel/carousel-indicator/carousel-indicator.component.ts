import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-indicator.component.html',
  styleUrls: ['./carousel-indicator.component.scss']
})
export class CarouselIndicatorComponent {
  @Input() items:any
}
