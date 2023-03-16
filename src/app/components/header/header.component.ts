import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  //#region Variables
  menuItems: menuItem[] = [
    {
      label: 'Home',
      icon: 'bi bi-house-door-fill',
      href: '#',
    },
    {
      label: 'Productos',
      icon: 'bi bi-folder-fill',
      href: '#products',
    },
    {
      label: 'Servicios',
      icon: 'bi bi-person-fill-gear',
      routerLink: '',
      href: '#services',
    },
    {
      label: 'Galleria',
      icon: 'bi bi-person-fill-gear',
      routerLink: '',
      href: '#gallery',
    },
    {
      label: 'Empresa',
      icon: 'bi bi-person-fill-gear',
      routerLink: '',
      href: '#about-me',
    },
    {
      label: 'Contacto',
      icon: 'bi bi-chat-fill',
      href: '#contact',
    },
    // {
    //   label: 'Services',
    //   icon: 'bi bi-person-fill-gear',
    //   routerLink: '',
    //   href: '#',
    // },
  ];
  //#endregion Variables
}

//#region Interfaces
interface menuItem {
  label: string;
  icon: string;
  routerLink?: string;
  href?: string;
}
//#endregion Interfaces
