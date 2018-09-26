import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { PATHBACKEND } from '../../../environments/environment';

@Injectable()
export class GenericService<T> {

  protected headers: HttpHeaders;
  protected url: string;

  constructor(
    protected http: HttpClient,
    protected endpoint: string
  ) {
    this.url = PATHBACKEND;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + JSON.parse(localStorage.getItem('user')).token
    });
  }

  public create(item: T): Observable<T> {
    return this.http
      .post<T>(`${this.url}/${this.endpoint}`, item, {headers: this.headers});
  }

  public update(primaryKey: any, item: T): Observable<T> {
    return this.http
      .put<T>(`${this.url}/${this.endpoint}/${primaryKey}`, item, {headers: this.headers});
  }

	public read(primaryKey: any): Observable<T> {
    return this.http
      .get<T>(`${this.url}/${this.endpoint}/${primaryKey}`, {headers: this.headers});
  }

  public list(): Observable<T[]> {
    return this.http
      .get<T[]>(`${this.url}/${this.endpoint}/`, {headers: this.headers});
  }

  public delete(id: number): Observable<String> {
    return this.http
      .delete<String>(`${this.url}/${this.endpoint}/${id}`, {headers: this.headers});
  }
}