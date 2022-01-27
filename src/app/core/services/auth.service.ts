import { Injectable } from '@angular/core';
import { SesionStorageService } from './sesion-storage.service';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = {
    id: 2
  };
  constructor(
    private http: HttpClient,
    private storage: SesionStorageService
  ) { 
    // this.currentUser = this.storage.getDataStorage('authividocente');
    // // TODO: ELIMINAR ESTO CUANDO YA NO SEA NECESARIO QUEMAR EL ID
    // if (this.currentUser) {
    //   this.currentUser.id = 2;
    // }
  }

  signOut(){
    this.storage.removeStorage('authividocente');
  }

  // #region Tatto

  login(credential: any){
    const URL = environment.urlApi + 'Users/Login';
    return this.http.post(URL, credential)
  }

  forgotPassword(email: string){
    const URL = environment.urlApi + 'Users/ForgotPassword'
    return this.http.post(URL, {email})
  }

  resetPassword(body: any) {
    const URL = environment.urlApi + 'Users/ResetPassword'
    return this.http.post(URL, body)
  }


  // #endregion Tatto
}
