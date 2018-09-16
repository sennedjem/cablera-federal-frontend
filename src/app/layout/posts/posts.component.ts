import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Post } from '../../shared/models';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
    animations: [routerTransition()]
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {


    this.route.data.subscribe((data) => this.posts = data.posts);

    this.posts.map(function(post) {
      return formatPost(post)});

    function formatPost(post){
      post.tags = post.tags.map(function(tag) {return tag.description});
      return post
    }

  }

}
