import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { PostsService } from '../../../shared/services/posts/posts.service';
import { NgForm, ReactiveFormsModule} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TagInputModule } from 'ngx-chips';
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
  items: ['pepe','caca'];

  constructor(private postsService: PostsService,private route: ActivatedRoute,) {}



  ngOnInit() {
    this.items = ['pepe','caca'];
    let id = (this.route.snapshot.paramMap.get('id'));
    this.postsService.getPost(id).subscribe( data => {
        this.post = data;
        this.post.tags = this.post.tags.map(function(tag) {return tag.description});
        console.log(this.post.tags)
      });
  }

   save(postForm: NgForm){ 
      this.postsService.savePost(this.post).subscribe(
            data => alert('pepe')
        );
   }

}
