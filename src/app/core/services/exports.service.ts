import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportsService {

  constructor() { }

  downloadFile(data: any, filename: string, provider: string) {
    let csvData;
    if (provider === 'MisClases') {
      csvData = this.ConvertToCSV(data, ['grado', 'tema', 'clase', 'profesor', 'material_ivi', 'documentos', 'enlaces']);
    }
    const blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    const dwldLink = document.createElement('a');
    const url = URL.createObjectURL(blob);
    const isSafariBrowser = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
    if (isSafariBrowser) {
      dwldLink.setAttribute('target', '_blank');
    }
    dwldLink.setAttribute('href', url);
    dwldLink.setAttribute('download', filename + '.xls');
    dwldLink.style.visibility = 'hidden';
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

  private ConvertToCSV(objArray: any, headerList: any) {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'Nº,';
    // tslint:disable-next-line: forin
    for (const index in headerList) {
      row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
      let line = (i + 1) + '';
      // tslint:disable-next-line: forin
      for (const index in headerList) {
        const head = headerList[index];
        line += ',' + array[i][head];
      }
      str += line + '\r\n';
    }
    return str;
  }

  replaceCharacter(data: string) {
    let cadena = '';
    for (const iterator of data) {
      (iterator === ',') ? cadena += ' ' : cadena += iterator;
    }
    return cadena;
  }
}

export interface MisClases {
  grado: string;
  tema: string;
  clase: string;
  profesor: string;
  material_ivi: boolean;
  documentos: boolean;
  enlaces: boolean;
}

