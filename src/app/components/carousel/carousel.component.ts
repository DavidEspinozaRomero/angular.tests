import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CarouselIndicatorComponent } from './carousel-indicator/carousel-indicator.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: [CommonModule, CarouselItemComponent, CarouselIndicatorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit {
  carouselList = [
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14sw-kisFHt7SH4C0yRpvH_gZYOSdhpJFSAIlH631&s',
      title: 'Example headline.',
      description:
        'Some representative placeholder content for the first slide of the carousel.',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14sw-kisFHt7SH4C0yRpvH_gZYOSdhpJFSAIlH631&s',
      title: 'Example headline.',
      description:
        'Some representative placeholder content for the first slide of the carousel.',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14sw-kisFHt7SH4C0yRpvH_gZYOSdhpJFSAIlH631&s',
      title: 'Example headline.',
      description:
        'Some representative placeholder content for the first slide of the carousel.',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14sw-kisFHt7SH4C0yRpvH_gZYOSdhpJFSAIlH631&s',
      title: 'Example headline.',
      description:
        'Some representative placeholder content for the first slide of the carousel.',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14sw-kisFHt7SH4C0yRpvH_gZYOSdhpJFSAIlH631&s',
      title: 'Example headline.',
      description:
        'Some representative placeholder content for the first slide of the carousel.',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14sw-kisFHt7SH4C0yRpvH_gZYOSdhpJFSAIlH631&s',
      title: 'Example headline.',
      description:
        'Some representative placeholder content for the first slide of the carousel.',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14sw-kisFHt7SH4C0yRpvH_gZYOSdhpJFSAIlH631&s',
      title: 'Example headline.',
      description:
        'Some representative placeholder content for the first slide of the carousel.',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14sw-kisFHt7SH4C0yRpvH_gZYOSdhpJFSAIlH631&s',
      title: 'Example headline.',
      description:
        'Some representative placeholder content for the first slide of the carousel.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
