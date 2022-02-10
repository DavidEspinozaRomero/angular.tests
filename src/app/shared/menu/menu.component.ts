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
      icon: 'pi pi-fw pi-pencil',
      routerLink: '**',
    },
    {
      label: 'Products',
      routerLink: 'productos',
      items: 
        [
          {
            label: 'Bordado a mano', 
            icon: 'pi pi-fw pi-plus',
            routerLink: 'bordadoamano',
          },
          {
            label: 'Bordado a maquina', 
            icon: 'pi pi-fw pi-dollar',
            routerLink: 'bordadoamaquina',
          },
          {
            label: 'Punto de cruz', 
            icon: 'pi pi-fw pi-dollar',
            routerLink: 'puntodecruz',
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
