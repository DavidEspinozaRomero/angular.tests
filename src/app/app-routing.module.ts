import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './pages/products/products.component';
// import { LayoutsComponent } from './layouts/layouts.component';
// import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
    
  { path: '', component: MainComponent },
  { path: 'productos', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
	{ path: 'productos', component: ProductsComponent },
	{ path: 'contacto', component: ContactComponent },
	{ path: 'nosotros', component: NosotrosComponent },
	{ path: 'galleria', component: GalleryComponent },
	{ path: '**', redirectTo: '' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
// canActivate: [AuthGuard]
