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
      routerLink: '',
    },
    {
      label: 'Contacto',
      icon: 'bi bi-chat-fill',
      routerLink: '/contact',
    },
    {
      label: 'Productos',
      icon: 'bi bi-folder-fill',
      routerLink: '',
    },
    // {
    //   label: 'Services',
    //   icon: 'bi bi-person-fill-gear',
    //   routerLink: '',
    // },
    // { label: 'About me', icon: 'bi bi-person-fill', routerLink: '' },
  ];
  //#endregion Variables
}

//#region Interfaces
interface menuItem {
  label: string;
  icon: string;
  routerLink: string;
}
//#endregion Interfaces
