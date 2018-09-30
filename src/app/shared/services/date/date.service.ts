import { Injectable } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es-AR');

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(
    private datepipe: DatePipe
  )
  {}

  public formatDate(date: string, dateType: string): String {
    if (date != null) {
      return this.datepipe.transform(new Date(date), dateType);
    }
  }
}