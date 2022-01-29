import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { LayoutsComponent } from './layouts/layouts.component';
// import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: AppComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
//   { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
// canActivate: [AuthGuard]
