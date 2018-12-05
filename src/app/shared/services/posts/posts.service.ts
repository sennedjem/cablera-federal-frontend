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

  public updateFavouriteStatus(esId: string, favourite: boolean){
    const user = JSON.parse(localStorage.getItem('user'));
    if(favourite){
      return this.http.post<T>(`${this.url}/favs-posts`, {"post_es_id":esId,"user_id":user.id}, {headers: this.headers});
    } else {
      return this.http.delete<String>(`${this.url}/favs-posts/${esId}`, {headers: this.headers});
    }
  }

  public getFavsPosts(): Observable<Object []> {
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.get<Object[]>(`${this.url}/favs-posts/${user.id}`, {headers: this.headers});
  }

  public getFavsPostsExtended(): Observable<Object []> {
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.get<Object[]>(`${this.url}/favourite-posts-extended/${user.id}`, {headers: this.headers});
  }

  public getPosts(page: string = null, filters = {}): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${this.url}/${this.endpoint}?per_page=12` + (page? `&page=${page}`:'') + this.filtersParams(filters), {headers: this.headers});
  }
  
  filtersParams(filters: {}){
    var params = '';
    
    if(Object.keys(filters)){
      if(filters['tags']) params+=this.formatTags(params,filters['tags']);
      if(filters['media_id']) params+=`&media_id=${filters['media_id']}`;
      if(filters['site_type']) params+=`&site_type=${filters['site_type']}`;
      if(filters['creation_date']) params+=this.formatDate(params,filters['creation_date']);
    }

    return params;
  }

  formatTags(params: string, variables: [string]){
    return `${params}&tags=${variables.map(function(tag){ return tag['value'] }).join(',')}`;
  }

  formatDate(params: string, date: [string]){
    var day = date['day'];
    if(day<10){
      day = '0' + day;
    }
    var month = date['month'];
    if(month<10){
      month = '0' + month;
    }
    return `${params}&creation_date=${date['year']}-${month}-${day}`;
  }
}
