import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services = [
    {
      icon: 'bi bi-easel',
      title: 'Logotipos y diseños',
      description:
        'Bordado en una variedad de prendas y artículos textiles, como camisetas, sudaderas, gorras, toallas, bolsos, mantas y mucho más.',
    },
    {
      icon: 'bi bi-layers',
      title: 'Personalización de prendas',
      description:
        'Nombres, iniciales y otros detalles. Esto es especialmente popular para regalos personalizados y artículos promocionales.',
    },
    {
      icon: 'bi bi-heartbreak',
      title: 'Reparación y restauración',
      description:
        'Prendas con bordados dañados o desgastados y restaurar prendas antiguas con nuevos diseños de bordado.',
    },
    {
      icon: 'bi bi-box2-heart',
      title: 'Asesoria y Suministros',
      description:
        'Hilos de bordado, agujas, estabilizadores de tela, libros, entre otros',
    },
    // {
    //   icon: 'bi bi-facebook',
    //   title: 'Digitalización de diseños',
    //   description:
    //     'Depende el diseño, se puede digitalizarlo para que pueda ser leído por una máquina de bordado. Los negocios de bordados ofrecen servicios de digitalización para convertir diseños en archivos de bordado legibles.',
    // },
    // {
    //   icon: 'bi bi-facebook',
    //   title: 'Digitalización de diseños',
    //   description:
    //     'Prendas con bordados dañados o desgastados y restaurar prendas antiguas con nuevos diseños de bordado.',
    // },
  ];
}
