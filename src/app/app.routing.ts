import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'productos', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  // { path: 'productos', component: ProductsComponent, pathMatch:'full', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  {
    path: 'productos',
    children: [
      {
        path: 'bordadoamano',
        loadComponent: () =>
          import('./pages/products/bordadosamano/bordadosamano.component').then(
            (m) => m.BordadosamanoComponent
          ),
      },
      {
        path: 'bordadoamaquina',
        loadComponent: () =>
          import(
            './pages/products/bordadosamaquina/bordadosamaquina.component'
          ).then((m) => m.BordadosamaquinaComponent),
      },
      {
        path: 'bordadopuntodecruz',
        loadComponent: () =>
          import(
            './pages/products/bordadospuntodecruz/bordadospuntodecruz.component'
          ).then((m) => m.BordadospuntodecruzComponent),
      },
      { path: '**', redirectTo: 'bordadoamano' },
    ],
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/nosotros/nosotros.component').then(
        (m) => m.NosotrosComponent
      ),
  },
  {
    path: 'galleria',
    loadComponent: () =>
      import('./pages/gallery/gallery.component').then(
        (m) => m.GalleryComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/main/main.component').then((m) => m.MainComponent),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// canActivate: [AuthGuard]
