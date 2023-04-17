import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-ngxbootstrap-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './ngxbootstrap-carousel.component.html',
  styleUrls: ['./ngxbootstrap-carousel.component.scss']
})
export class NgxbootstrapCarouselComponent {
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

}
