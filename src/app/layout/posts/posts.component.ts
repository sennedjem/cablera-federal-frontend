import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../shared/models';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
    animations: [routerTransition()]
})
export class PostsComponent implements OnInit {

   public data : Post[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {


    this.route.data.subscribe((data) => this.data = data.posts);

    this.data.map(function(post) {
      return formatPost(post)});

    function formatPost(post){
      post.tags = post.tags.map(function(tag) {return tag.description});
      return post
    }

  }

}
