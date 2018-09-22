import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../shared/services';
import { Post } from '../../shared/models';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
    animations: [routerTransition()],
    providers: [ConfigService]
})
export class PostsComponent implements OnInit {

   data : Post[];
   configuration;
   columns;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {


    this.route.data.subscribe((data) => this.data = data.posts);

    this.data.map(function(post) {
      return formatPost(post)
    });

    console.log(this.data)

    this.columns = [
            { key: 'id', title: 'Id', placeholder: 'Filtrar por Id'},
            { key: 'content', title: 'content', placeholder: 'Filtrar por content' },
            { key: 'url', title: 'Url', placeholder: 'Filtrar por url' },
            { key: 'site', title: 'Site', placeholder: 'filtrar por site' },
            { key: 'creation_date', title: 'Creation Date', placeholder: 'Creado en...' },
            { key: 'tags', title: 'Tags', placeholder: 'Tags' }
        ];

     this.configuration = ConfigService.config;

    function formatPost(post){
      post.tags = post.tags.map(function(tag) {return tag.description});
      return post
    }

  }

}
