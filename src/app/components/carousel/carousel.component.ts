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
        './../../../assets/img/bordado1.jpeg',
      title: 'Bailarinas',
      description:
        'Some representative placeholder content for the first slide of the carousel.',
    },
    {
      imgSrc:
        './../../../assets/img/bordado2.jpeg',
      title: 'Lobito',
      description:
        'Some representative placeholder content for the first slide of the carousel.',
    },
    {
      imgSrc:
        './../../../assets/img/bordado3.jpeg',
      title: 'Flores azules',
      description:
        'Some representative placeholder content for the first slide of the carousel.',
    },
    {
      imgSrc:
        './../../../assets/img/bordado4.jpeg',
      title: 'Tigre',
      description:
        'Some representative placeholder content for the first slide of the carousel.',
    },
    {
      imgSrc:
        './../../../assets/img/bordado5.jpeg',
      title: 'Gatito negro',
      description:
        'Some representative placeholder content for the first slide of the carousel.',
    },
    {
      imgSrc:
        './../../../assets/img/bordado6.jpeg',
      title: 'Gatito blanco',
      description:
        'Some representative placeholder content for the first slide of the carousel.',
    },
    {
      imgSrc:
        './../../../assets/img/bordado7.jpeg',
      title: 'Orquideas',
      description:
        'Some representative placeholder content for the first slide of the carousel.',
    },
    {
      imgSrc:
        './../../../assets/img/bordado8.jpeg',
      title: 'Trio de gatitos bebes',
      description:
        'Some representative placeholder content for the first slide of the carousel.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
