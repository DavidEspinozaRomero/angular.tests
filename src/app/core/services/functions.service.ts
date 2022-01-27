import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() { }

  onlyNumbers(evt: any) {
    const theEvent = evt || window.event;
    // Handle key press
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  /*    Name:         filterdates
        Description:  Función que filtra los datos por fecha
        Args:         data:any -> datos para filtrar
                      filterdate?:number-> filter date de donde se filtre
                      dateSelected?:string-> filtro de calendario
        Return:       json con la información de los datos filtrados
        Date:         02/12/2021
        Author:       Alexander Conteron.
  */
  filterdates(data: any, filterdate?: number, dateSelected?: string): any {
    const actual = moment().format("YYYY-MM-DD");
    const month = actual.split('-')[1];
    const year = actual.split('-')[0];
    const day = moment().format("dddd");

    let number_day = 0;
    if (day === 'Monday') {
      number_day = 1;
    }
    if (day === 'Tuesday') {
      number_day = 2;
    }
    if (day === 'Wednesday') {
      number_day = 3;
    }
    if (day === 'Thursday') {
      number_day = 4;
    }
    if (day === 'Friday') {
      number_day = 5;
    }
    if (day === 'Saturday') {
      number_day = 5;
    }
    if (day === 'Sunday') {
      number_day = 5;
    }

    for (let i = 0; i < 10; i++) {
      /*FILTRO HOY*/
      if (filterdate === 1) {
        for (const iterator of data) {
          if (iterator.fecha !== actual) {
            data.splice(data.indexOf(iterator), 1);
          }
        }
      }

      // FECHAS ESTA SEMANA
      if (filterdate === 2) {
        const dates = [
          { date: '' },
          { date: '' },
          { date: '' },
          { date: '' },
          { date: '' },
          { date: '' },
          { date: '' },
        ]
        if (number_day === 1) {
          dates[0].date = moment().format('YYYY-MM-DD');
          dates[1].date = moment().add(1, 'days').format('YYYY-MM-DD');
          dates[2].date = moment().add(2, 'days').format('YYYY-MM-DD');
          dates[3].date = moment().add(3, 'days').format('YYYY-MM-DD');
          dates[4].date = moment().add(4, 'days').format('YYYY-MM-DD');
          dates[5].date = moment().add(5, 'days').format('YYYY-MM-DD');
          dates[6].date = moment().add(6, 'days').format('YYYY-MM-DD');
        }
        if (number_day === 2) {
          dates[0].date = moment().subtract(1, 'days').format('YYYY-MM-DD');
          dates[1].date = moment().format('YYYY-MM-DD');
          dates[2].date = moment().add(1, 'days').format('YYYY-MM-DD');
          dates[3].date = moment().add(2, 'days').format('YYYY-MM-DD');
          dates[4].date = moment().add(3, 'days').format('YYYY-MM-DD');
          dates[5].date = moment().add(4, 'days').format('YYYY-MM-DD');
          dates[6].date = moment().add(5, 'days').format('YYYY-MM-DD');
        }
        if (number_day === 3) {
          dates[0].date = moment().subtract(2, 'days').format('YYYY-MM-DD');
          dates[1].date = moment().subtract(1, 'days').format('YYYY-MM-DD');
          dates[2].date = moment().format('YYYY-MM-DD');
          dates[3].date = moment().add(1, 'days').format('YYYY-MM-DD');
          dates[4].date = moment().add(2, 'days').format('YYYY-MM-DD');
          dates[5].date = moment().add(3, 'days').format('YYYY-MM-DD');
          dates[6].date = moment().add(4, 'days').format('YYYY-MM-DD');
        }
        if (number_day === 4) {
          dates[0].date = moment().subtract(3, 'days').format('YYYY-MM-DD');
          dates[1].date = moment().subtract(2, 'days').format('YYYY-MM-DD');
          dates[2].date = moment().subtract(1, 'days').format('YYYY-MM-DD');
          dates[3].date = moment().format('YYYY-MM-DD');
          dates[4].date = moment().add(1, 'days').format('YYYY-MM-DD');
          dates[5].date = moment().add(2, 'days').format('YYYY-MM-DD');
          dates[6].date = moment().add(3, 'days').format('YYYY-MM-DD');
        }
        if (number_day === 5) {
          dates[0].date = moment().subtract(4, 'days').format('YYYY-MM-DD');
          dates[1].date = moment().subtract(3, 'days').format('YYYY-MM-DD');
          dates[2].date = moment().subtract(2, 'days').format('YYYY-MM-DD');
          dates[3].date = moment().subtract(1, 'days').format('YYYY-MM-DD');
          dates[4].date = moment().format('YYYY-MM-DD');
          dates[5].date = moment().add(1, 'days').format('YYYY-MM-DD');
          dates[6].date = moment().add(2, 'days').format('YYYY-MM-DD');
        }
        if (number_day === 6) {
          dates[0].date = moment().subtract(5, 'days').format('YYYY-MM-DD');
          dates[1].date = moment().subtract(4, 'days').format('YYYY-MM-DD');
          dates[2].date = moment().subtract(3, 'days').format('YYYY-MM-DD');
          dates[3].date = moment().subtract(2, 'days').format('YYYY-MM-DD');
          dates[4].date = moment().subtract(1, 'days').format('YYYY-MM-DD');
          dates[5].date = moment().format('YYYY-MM-DD');
          dates[6].date = moment().add(1, 'days').format('YYYY-MM-DD');
        }
        if (number_day === 7) {
          dates[0].date = moment().subtract(6, 'days').format('YYYY-MM-DD');
          dates[1].date = moment().subtract(5, 'days').format('YYYY-MM-DD');
          dates[2].date = moment().subtract(4, 'days').format('YYYY-MM-DD');
          dates[3].date = moment().subtract(3, 'days').format('YYYY-MM-DD');
          dates[4].date = moment().subtract(2, 'days').format('YYYY-MM-DD');
          dates[5].date = moment().subtract(1, 'days').format('YYYY-MM-DD');
          dates[6].date = moment().format('YYYY-MM-DD');
        }

        for (const iterator of data) {
          let exist = false;
          for (const date of dates) {
            if (date.date === iterator.fecha) {
              exist = true;
            }
          }
          if (!exist) {
            data.splice(data.indexOf(iterator), 1);
          }
        }
      }
      // FIN FECHAS ESTA SEMANA
      // FECHAS PROXIMA ESTA SEMANA
      if (filterdate === 3) {
        let days = 0;
        const dates = [
          { date: '' },
          { date: '' },
          { date: '' },
          { date: '' },
          { date: '' },
          { date: '' },
          { date: '' },
        ]
        if (number_day === 1) {
          days = 7;
        }
        if (number_day === 2) {
          days = 6;
        }
        if (number_day === 3) {
          days = 5;
        }
        if (number_day === 4) {
          days = 4;
        }
        if (number_day === 5) {
          days = 3;
        }
        if (number_day === 6) {
          days = 2;
        }
        if (number_day === 7) {
          days = 1;
        }
        dates[0].date = moment().add(days, 'days').format('YYYY-MM-DD');
        dates[1].date = moment().add(days + 1, 'days').format('YYYY-MM-DD');
        dates[2].date = moment().add(days + 2, 'days').format('YYYY-MM-DD');
        dates[3].date = moment().add(days + 3, 'days').format('YYYY-MM-DD');
        dates[4].date = moment().add(days + 4, 'days').format('YYYY-MM-DD');
        dates[5].date = moment().add(days + 5, 'days').format('YYYY-MM-DD');
        dates[6].date = moment().add(days + 6, 'days').format('YYYY-MM-DD');
        for (const iterator of data) {
          let exist = false;
          for (const date of dates) {
            if (date.date === iterator.fecha) {
              exist = true;
            }
          }
          if (!exist) {
            data.splice(data.indexOf(iterator), 1);
          }
        }
      }
      // FIN FECHAS PROXIMA ESTA SEMANA


      /*FILTRO MES ACTUAL*/
      if (filterdate === 4) {
        for (const iterator of data) {
          const monthI = iterator.fecha.split('-')[1];


          if (monthI !== month) {
            data.splice(data.indexOf(iterator), 1);
          }
        }
      }
      /*FILTRO AÑO ACTUAL*/
      if (filterdate === 5) {
        for (const iterator of data) {
          const yearI = iterator.fecha.split('-')[0];
          if (yearI !== year) {
            data.splice(data.indexOf(iterator), 1);
          }
        }
      }

      if (filterdate === 6) {
        for (const iterator of data) {
          if (iterator.fecha !== dateSelected) {
            data.splice(data.indexOf(iterator), 1);
          }
        }
      }
      // FIN FECHA CALENDARIO

    }
    return data;
  }

  // Author: Carlos Sanchez
  // Description: Remplaza los elementos de una cadena de caracteres.
  // Args: data -> cadena a reemplazar
  //       character -> caracter a reemplazar
  //       replace -> transformacion
  // Date: 2021-12/16
  replaceCharacter(data: string, character: string, replace: string) {
    let cadena = '';
    for (const iterator of data) {
      (iterator === character) ? cadena += replace : cadena += iterator;
    }
    return cadena;
  }
}
