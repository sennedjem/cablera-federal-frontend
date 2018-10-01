import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router,ActivatedRoute } from '@angular/router';
import { Post } from '../../shared/models';
import { PostsService } from '../../shared/services/posts/posts.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
    animations: [routerTransition()]
})
export class PostsComponent implements OnInit {

   data : Post[];
   count: number;
   perPage: number;
   page: number;

  constructor(
    private route: Router,
    private actRoute: ActivatedRoute,
    private postsService: PostsService
  ) {
  }

  ngOnInit() {
    this.actRoute.data.subscribe((data) => {
      this.data = data.posts.data,
      this.count = data.posts.total,
      this.perPage = data.posts.per_page,
      this.page = data.posts.current_page
    });

    this.data.map(function(post) {
      return formatPost(post)
    });

    function formatPost(post){
      post.tags = post.tags.map(function(tag) {return tag.description});
      return post
    }
  }

  formatContent(content){
    return content.substring(0, content.indexOf("http"));
  }

  pageChange(newPage){
    this.page = newPage
    this.postsService
    
    this.route.navigate([], {
      queryParams: {
        page: newPage
      }
    });

    window.location.reload();
  }
}
