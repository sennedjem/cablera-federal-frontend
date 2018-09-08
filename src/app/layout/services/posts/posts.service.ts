import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {User} from "../model/user.model";

import { PATHBACKEND } from '../../../../environments/environment';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Object[]>(`${PATHBACKEND}/posts`);
  }
}
