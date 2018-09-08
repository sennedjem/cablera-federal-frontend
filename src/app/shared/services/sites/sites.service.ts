import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SitesService extends GenericService<Object>{

  constructor(
    protected http: HttpClient
  ) {
    super(http,"sites");
  }

  public searchSite(site: Object): Observable<Object> {
    return this.http
      .post<Object>(`${this.url}/${this.endpoint}`, site, {headers: this.headers});
  }

  public searchTypes(): Observable<Object[]> {
    return this.http
      .get<Object[]>(`${this.url}/${this.endpoint}/types`, {headers: this.headers});
  }
}
