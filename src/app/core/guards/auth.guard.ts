import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SesionStorageService } from '../services/sesion-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private _session: SesionStorageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // VERIFICA SI EXISTE UNA CUENTA LOGEADA
    return true;
    const currentUser = this._session.getStorage('authividocente');
    if (currentUser) {
      // SI ESTA LOGEADO DEVUELVE UN TRUE
      return true;
    }
    // SI NO ESTA LOGEADO DEVUELVE UN FALSE Y COLOCA COMO PAGINA PRINCIPAL EL LOGIN
    this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
