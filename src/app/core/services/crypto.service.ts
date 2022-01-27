// CREADO: Carlos Sanchez
// FECHA: 21-10-2021
// DESCRIPCION: Servicio para encriptar y descriptar cualquier tipo de dato

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  // Encripta cualquier tipo de dato
  encrypt(data: any){
    return CryptoJS.AES.encrypt(JSON.stringify(data), environment.secretKey).toString();
  }

  // Desencripta cualquier tipo de dato
  decrypt(data: any){
    const bytes  = CryptoJS.AES.decrypt(data, environment.secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
}
