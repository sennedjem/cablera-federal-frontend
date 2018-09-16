import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { PostsService } from '../../shared/services/posts/posts.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Post } from '../../shared/models';

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

  posts: Post[];

  post = null;

  constructor(private postsService: PostsService,public ngxSmartModalService: NgxSmartModalService) {}

  ngOnInit() {

    function formatPost(post){
      post.tags = post.tags.map(function(tag) {return tag.description});
      return post
    }



    this.postsService.getPosts()
      .subscribe( data => {
        data = data.map(function(post) {return formatPost(post)});
        this.posts = data;
        console.log(data)
      });
  }

}
