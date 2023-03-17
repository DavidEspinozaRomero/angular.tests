import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products = [
    {
      title: 'Almohadas',
      description:
        'Cada noche, envuélvete en la suavidad y estilo de nuestras almohadas bordadas.',
      imgUrl:
        'https://unsplash.com/photos/uwRt8jrjZTY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ0NTQwNjYy&force=true&w=640',
    },
    {
      title: 'Cuadros',
      description:
        'Cada puntada cuenta una historia: decora con recuerdos tu hogar.',
      imgUrl:
        'https://images.pexels.com/photos/7450596/pexels-photo-7450596.jpeg?cs=srgb&dl=pexels-olga-kalinina-7450596.jpg&fm=jpg&w=640&h=856&_gl=1*12c8di2*_ga*ODA1NzUxNDU4LjE2NzQ2ODA5MDQ.*_ga_8JE65Q40S6*MTY3OTA2NjEzNS41LjEuMTY3OTA2NzM3NC4wLjAuMA..',
    },
    {
      title: 'Ropa',
      description:
        'Luce tus emociones en tu ropa: elige entre nuestra amplia gama de prendas bordadas.',
      imgUrl:
        'https://images.pexels.com/photos/11829097/pexels-photo-11829097.jpeg?cs=srgb&dl=pexels-orthosved-11829097.jpg&fm=jpg&w=640&h=872&_gl=1*1myozov*_ga*ODA1NzUxNDU4LjE2NzQ2ODA5MDQ.*_ga_8JE65Q40S6*MTY3OTA2NjEzNS41LjEuMTY3OTA2NjkxMy4wLjAuMA..',
    },
  ];
  unsplasimgs = [
    'https://images.pexels.com/photos/13631021/pexels-photo-13631021.jpeg?cs=srgb&dl=pexels-b%C3%BC%C5%9Fra-%C5%9Fahin-13631021.jpg&fm=jpg&w=640&h=853&_gl=1*1u28pds*_ga*ODA1NzUxNDU4LjE2NzQ2ODA5MDQ.*_ga_8JE65Q40S6*MTY3OTA2NjEzNS41LjEuMTY3OTA2NzM3NC4wLjAuMA..',
    'https://images.pexels.com/photos/2089949/pexels-photo-2089949.jpeg?cs=srgb&dl=pexels-dominika-roseclay-2089949.jpg&fm=jpg&w=640&h=425&_gl=1*1nbny29*_ga*ODA1NzUxNDU4LjE2NzQ2ODA5MDQ.*_ga_8JE65Q40S6*MTY3OTA2NjEzNS41LjEuMTY3OTA2NzQ3MC4wLjAuMA..',
    'https://images.pexels.com/photos/10824516/pexels-photo-10824516.jpeg?cs=srgb&dl=pexels-olga-kalinina-10824516.jpg&fm=jpg&w=640&h=770&_gl=1*1lwm49*_ga*ODA1NzUxNDU4LjE2NzQ2ODA5MDQ.*_ga_8JE65Q40S6*MTY3OTA2NjEzNS41LjEuMTY3OTA2NzQ5MC4wLjAuMA..',
    'https://images.pexels.com/photos/7450596/pexels-photo-7450596.jpeg?cs=srgb&dl=pexels-olga-kalinina-7450596.jpg&fm=jpg&w=640&h=856&_gl=1*1mar3xd*_ga*ODA1NzUxNDU4LjE2NzQ2ODA5MDQ.*_ga_8JE65Q40S6*MTY3OTA2NjEzNS41LjEuMTY3OTA2NzUwNi4wLjAuMA..',
    'https://images.pexels.com/photos/11343773/pexels-photo-11343773.jpeg?cs=srgb&dl=pexels-olga-kalinina-11343773.jpg&fm=jpg&w=640&h=856&_gl=1*1nrsmr1*_ga*ODA1NzUxNDU4LjE2NzQ2ODA5MDQ.*_ga_8JE65Q40S6*MTY3OTA2NjEzNS41LjEuMTY3OTA2NzUyOC4wLjAuMA..',
    '',
  ];

  constructor() {}

  ngOnInit(): void {}
}
