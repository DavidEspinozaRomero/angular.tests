import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxbootstrapCarouselComponent } from 'src/app/components/ngxbootstrap-carousel/ngxbootstrap-carousel.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, NgxbootstrapCarouselComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {}
