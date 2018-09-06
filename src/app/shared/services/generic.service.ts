import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { PATHBACKEND } from '../../../environments/environment';

@Injectable()
export class GenericService<T> {

  headers: HttpHeaders;
  url: string;

  constructor(
    protected http: HttpClient,
    protected endpoint: string
  ) {
    this.url = PATHBACKEND;
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

  public create(item: T): Observable<T> {
    return this.http
      .post<T>(`${this.url}/${this.endpoint}/new`, item);
  }

  public update(primaryKey: any, item: T): Observable<T> {
    return this.http
      .put<T>(`${this.url}/${this.endpoint}/${primaryKey}`, item);
  }

	public read(primaryKey: any): Observable<T> {
    return this.http
      .get<T>(`${this.url}/${this.endpoint}/${primaryKey}`);
  }

  public list(): Observable<T[]> {
    return this.http
      .get<T[]>(`${this.url}/${this.endpoint}/`);
  }

  public delete(id: number): Observable<String> {
    return this.http
      .delete<String>(`${this.url}/${this.endpoint}/${id}`);
  }
}