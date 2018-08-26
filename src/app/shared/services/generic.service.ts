import { Optional,Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
/*@Component({
  providers: [
    GenericRestService,
    { provide: 'url', useValue: PATHBACKEND },
    { provide: 'endpoint', useValue: 'users' }
  ]
})*/
export class GenericService<T> {

  headers: HttpHeaders;

  constructor(
    protected http: HttpClient,
    @Inject('url') @Optional() protected url?: string,
    @Inject('endpoint') @Optional() protected endpoint?: string
  ) {
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