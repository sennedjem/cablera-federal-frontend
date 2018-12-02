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

  public isLogged(): boolean {
    const user = localStorage.getItem('user');
    var expiresAt = new Date ( JSON.parse(localStorage.getItem('expires_at')) );
    var now = new Date();

    return (user  != null) && (now < expiresAt);
  }

  public login(user) {
    var today = new Date();
    today.setHours(today.getHours() + 10);
    const expiresAt = JSON.stringify(today);
    
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('expires_at');
  }
}