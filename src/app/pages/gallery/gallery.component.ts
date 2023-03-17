import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CarouselComponent } from 'src/app/components';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
