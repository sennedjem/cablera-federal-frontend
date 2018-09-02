import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PATHBACKEND } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(
    protected http: HttpClient
  ){}

  public handleAuthentication(user): Observable<any> {
    return this.http
      .post<any>(`${PATHBACKEND}/login`, user);
  }
}