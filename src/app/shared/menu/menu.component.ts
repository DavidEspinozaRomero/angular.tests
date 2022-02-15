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
      label: 'Inicio',
      icon: 'bi bi-house',
      routerLink: '**',
    },
    {
      label: 'Productos',
      icon: 'bi bi-cart4',
      // routerLink: 'productos',
      items: 
        [
          {
            label: 'Bordado a mano', 
            // icon: 'pi pi-fw pi-plus',
            routerLink: 'productos/bordadoamano',
          },
          {
            label: 'Bordado a maquina', 
            // icon: 'pi pi-fw pi-dollar',
            routerLink: 'productos/bordadoamaquina',
          },
          {
            label: 'Punto de cruz', 
            // icon: 'pi pi-fw pi-dollar',
            routerLink: 'productos/bordadopuntodecruz',
          },
        ]
    },
    {
      label: 'Contacto',
      icon: 'bi bi-envelope',
      routerLink: 'contacto',
    },
    {
      label: 'Nosotros',
      icon: 'bi bi-people-fill',
      routerLink: 'nosotros',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
