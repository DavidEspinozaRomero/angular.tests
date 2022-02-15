import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [
    {
      label: 'inicio',
      icon: 'bi bi-house-heart',
      routerLink: '**',
    },
    {
      label: 'Products',
      icon: 'bi bi-bag-heart',
      // routerLink: 'productos',
      items: 
        [
          {
            label: 'Bordado a mano', 
            icon: 'pi pi-fw pi-plus',
            routerLink: 'productos/bordadoamano',
          },
          {
            label: 'Bordado a maquina', 
            icon: 'pi pi-fw pi-dollar',
            routerLink: 'productos/bordadoamaquina',
          },
          {
            label: 'Punto de cruz', 
            icon: 'pi pi-fw pi-dollar',
            routerLink: 'productos/bordadopuntodecruz',
          },
        ]
    },
    {
      label: 'Contacto',
      icon: 'pi pi-fw pi-pencil',
      routerLink: 'contacto',
    },
    {
      label: 'Nosotros',
      icon: 'pi pi-fw pi-gear',
      routerLink: 'nosotros',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
