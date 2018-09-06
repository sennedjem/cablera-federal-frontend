import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PATHBACKEND } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  
  headers: HttpHeaders;

  constructor(
    protected http: HttpClient
  ){
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

  public handleAuthentication(user): Observable<any> {
    return this.http
      .post<any>(`${PATHBACKEND}/login`, user);
  }

  public signUp(user): Observable<any> {
    return this.http
      .post<any>(`${PATHBACKEND}/users`, user, {headers: this.headers});
  }
}