import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { TableModule } from 'ngx-easy-table';
import { PostsGetAllResolver } from '../../shared/resolves/posts-get-all-resolver'

const routes: Routes = [
    {
        path: '', component: PostsComponent, resolve: {posts : PostsGetAllResolver}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
    	RouterModule,
        TableModule
    ],
    providers: [PostsGetAllResolver]
})
export class PostsRoutingModule {
}
