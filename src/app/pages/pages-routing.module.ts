import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'productos', component: ProductsComponent },
	{ path: 'contacto', component: ContactComponent },
	// { path: 'nosotros', component: ProductsComponent },
	{ path: '**', redirecto: '' },
	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class PagesRoutingModule { }
