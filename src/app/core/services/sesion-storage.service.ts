// CREADO: Carlos Sanchez
// FECHA: 21-10-2021
// DESCRIPCION: Servicio de CRUD para traer lo que se guarde en la sesion

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class SesionStorageService {

  constructor() { }

  // Guardar los datos al sesion storage encriptados
  setStorage(title: string, data: string){
    const encrypt = CryptoJS.AES.encrypt(JSON.stringify(data), environment.secretKey).toString();
    sessionStorage.setItem(title, encrypt)
  }

  // Verifica si existe o no los datos al sesion storage encriptados
  getStorage(title: string){
    const storage = sessionStorage.getItem(title) || '';    
    const bytes  = CryptoJS.AES.decrypt(storage, environment.secretKey);
    const data = bytes.toString(CryptoJS.enc.Utf8);
    if (data) {
      return true
    }
    return false
  }

  // Traer los datos del storage
  getDataStorage(title: string){
    const storage = sessionStorage.getItem(title) || '';    
    const bytes  = CryptoJS.AES.decrypt(storage, environment.secretKey);
    const data = bytes.toString(CryptoJS.enc.Utf8);
    if (data) {
      return JSON.parse(data)
    }
    return data;
  }

  // Elimina todos los datos de una sesión
  clearStorage(){
    sessionStorage.clear();
  }

  // Remover item del storage
  removeStorage(title: string){
    sessionStorage.removeItem(title);
  }
}
