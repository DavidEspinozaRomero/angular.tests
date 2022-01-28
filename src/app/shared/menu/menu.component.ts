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
      label: 'Products',
      routerLink: 'products',
      items: 
        [
          {
            label: 'Bordado a mano', 
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Bordado a maquina', 
            icon: 'pi pi-fw pi-dollar',
          },
          {
            label: 'Punto de cruz', 
            icon: 'pi pi-fw pi-dollar',
          },
        ]
    },
    {
      label: 'Contacto',
      icon: 'pi pi-fw pi-pencil',
    },
    {
      label: 'Nosotros',
      icon: 'pi pi-fw pi-gear',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
