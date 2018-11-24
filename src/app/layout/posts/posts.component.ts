import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router,ActivatedRoute } from '@angular/router';
import { Post, Media } from '../../shared/models';
import { PostsService } from '../../shared/services/posts/posts.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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
  
  filters = {
    "media_id" :"",
    "creation_date" :undefined,
    "site_type" : "",
    "tags" : []
  };
  types;
  medias: [Media];

  model: NgbDateStruct;

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
      this.page = data.posts.current_page,

      this.types = data.types,
      this.medias = data.medias.data;
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
    return content + '...';
  }

  pageChange(newPage){
    this.page = newPage
    
    this.route.navigate([], {
      queryParams: {
        page: newPage
      }
    });

    this.postsService.getPosts("" + newPage,this.filters).subscribe(
      data => {
        this.data = formatPosts(data['data'])
      }
    );

    function formatPosts(posts){
      posts.map(function(post){
        return formatTags(post);
      })
      
      return posts;
    }

    function formatTags(post){
      post.tags = post.tags.map(function(tag) { return tag.description });
      return post;
    }

    window.scrollTo(0, 0);
  }

  filter(form) {
    console.log(this.filters)

    this.postsService.getPosts((""+this.page),this.filters).subscribe(
      data => {
        this.data = formatPosts(data['data']),
        this.count = data['total'],
        this.page = 1
      }
    );

    function formatPosts(posts){
      posts.map(function(post){
        return formatTags(post);
      })
      
      return posts;
    }

    function formatTags(post){
      post.tags = post.tags.map(function(tag) { return tag.description });
      return post;
    } 
  }
}
