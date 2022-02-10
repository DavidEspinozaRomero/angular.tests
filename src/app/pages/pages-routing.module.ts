import { BordadospuntodecruzComponent } from './products/bordadospuntodecruz/bordadospuntodecruz.component';
import { BordadosamaquinaComponent } from './products/bordadosamaquina/bordadosamaquina.component';
import { BordadosamanoComponent } from './products/bordadosamano/bordadosamano.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{ path: 'bordadoamano', component: BordadosamanoComponent },
	{ path: 'bordadoamaquina', component: BordadosamaquinaComponent },
	{ path: 'bordadopuntodecruz', component: BordadospuntodecruzComponent },
	{ path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class PagesRoutingModule { }
