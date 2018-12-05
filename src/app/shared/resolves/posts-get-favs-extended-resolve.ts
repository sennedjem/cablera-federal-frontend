import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { PostsService } from '../services/posts/posts.service';
import { Observable } from 'rxjs';

@Injectable()
export class PostsGetFavsExtendedResolve implements Resolve<Object>{

	constructor(private postsService: PostsService){}

	resolve(route: ActivatedRouteSnapshot): Object{
		const user = JSON.parse(localStorage.getItem('user'));
		console.log(user.id);
		return this.postsService.getFavsPostsExtended();
	}
}
