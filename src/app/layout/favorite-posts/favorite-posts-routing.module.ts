import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritePostsComponent } from './favorite-posts.component';
import { TableModule } from 'ngx-easy-table';
import { PostsGetFavsExtendedResolve } from '../../shared/resolves/posts-get-favs-resolve';

const routes: Routes = [
    {
        path: '', 
        component: FavoritePostsComponent, 
        resolve: {
            posts : PostsGetFavsExtendedResolve
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
        PostsGetFavsExtendedResolve
    ]
})
export class PostsRoutingModule {
}
