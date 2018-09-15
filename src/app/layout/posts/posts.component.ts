import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PostsService } from '../../shared/services/posts/posts.service';
@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
    providers: [
      PostsService
    ],
    animations: [routerTransition()]
})
export class PostsComponent implements OnInit {

  posts: Object[];
	
  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts()
      .subscribe( data => {
        this.posts = data;
      });
  }
}
