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
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14sw-kisFHt7SH4C0yRpvH_gZYOSdhpJFSAIlH631&s',
    },
    {
      title: 'Cuadros',
      description:
        'Cada puntada cuenta una historia: decora con recuerdos tu hogar.',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14sw-kisFHt7SH4C0yRpvH_gZYOSdhpJFSAIlH631&s',
    },
    {
      title: 'Ropa',
      description:
        'Luce tus emociones en tu ropa: elige entre nuestra amplia gama de prendas bordadas.',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14sw-kisFHt7SH4C0yRpvH_gZYOSdhpJFSAIlH631&s',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
