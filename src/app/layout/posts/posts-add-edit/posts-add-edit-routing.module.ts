import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsAddEditComponent } from './posts-add-edit.component';
import { FormsModule }   from '@angular/forms';
import { PostsFindResolver } from '../../../shared/resolves/posts-find-resolver'

const routes: Routes = [
    {
        path: '', component: PostsAddEditComponent, resolve: {post : PostsFindResolver}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule,FormsModule],
    providers: [PostsFindResolver]
})
export class PostsAddEditRoutingModule {
}
