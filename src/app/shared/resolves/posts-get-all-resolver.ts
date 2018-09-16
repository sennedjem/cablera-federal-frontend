import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { PostsService } from '../services/posts/posts.service';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable()
export class PostsGetAllResolver implements Resolve<Observable<Post[]>>{

	constructor(private postsService: PostsService){}

	resolve(route: ActivatedRouteSnapshot): Observable<Post[]>{
		return this.postsService.getPosts();
	}
}
