import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { PostsService } from '../services/posts/posts.service';
import { Post } from '../models/post';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class PostsFindResolver implements Resolve<Observable<Post>>{

	constructor(private postsService: PostsService,private route: ActivatedRoute){}

	resolve(route: ActivatedRouteSnapshot): Observable<Post>{
		return this.postsService.read((route.paramMap.get('id')));
	}
}
