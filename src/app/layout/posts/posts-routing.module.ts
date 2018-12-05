import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { TableModule } from 'ngx-easy-table';
import { PostsGetFavsResolve } from '../../shared/resolves/posts-get-favs-resolve';
import { MediaResolve, PostsGetAllResolver, TypesResolve} from '../../shared';

const routes: Routes = [
    {
        path: '', 
        component: PostsComponent, 
        resolve: {
            posts : PostsGetAllResolver,
            types : TypesResolve,
            medias : MediaResolve,
            favs : PostsGetFavsResolve
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
    	RouterModule,
        TableModule
    ],
    providers: [
        PostsGetAllResolver,
        PostsGetFavsResolve,
        TypesResolve,
        MediaResolve
    ]
})
export class PostsRoutingModule {
}
