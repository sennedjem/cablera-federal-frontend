import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { PostsService } from '../../../shared/services/posts/posts.service';
import { NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../../../shared/models';

@Component({
    selector: 'app-posts',
    templateUrl: './posts-add-edit.component.html',
    styleUrls: ['./posts-add-edit.component.scss'],
    providers: [
      PostsService
    ],
    animations: [routerTransition()]
})
export class PostsAddEditComponent implements OnInit {

  post: Post = new Post();

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => this.post = data.post);
    this.post.tags = this.post.tags.map(function(tag) {return tag.description});
  }

   save(postForm: NgForm){
      this.postsService.update(this.post.id,this.post).subscribe(
        data => this.router.navigate(['/posts']),
        error => alert(error)
      );
   }

}
