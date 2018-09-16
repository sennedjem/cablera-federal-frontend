import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends GenericService<Post>{

  constructor(
    protected http: HttpClient
  ) {
    super(http,"posts");
  }

  public getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${this.url}/${this.endpoint}?pagination=enabled`, {headers: this.headers});
  }

  public getPost(id): Observable<Post> {
    console.log(id)
    console.log(`${this.url}/${this.endpoint}/`+ id)
    return this.http
      .get<Post>(`${this.url}/${this.endpoint}/`+ id, {headers: this.headers});
  }

  public savePost(post: Post): Observable<Post> {
    return this.http
      .put<Post>(`${this.url}/${this.endpoint}/`+post.id, post, {headers: this.headers});
  }
}
