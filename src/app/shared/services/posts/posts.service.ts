import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends GenericService<Object>{

  constructor(
    protected http: HttpClient
  ) {
    super(http,"posts");
  }

  public getPosts(): Observable<Object[]> {
    return this.http
      .get<Object[]>(`${this.url}/${this.endpoint}?pagination=enabled`, {headers: this.headers});
  }

}
