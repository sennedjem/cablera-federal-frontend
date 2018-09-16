import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsAddEditComponent } from './posts-add-edit.component';
import { FormsModule }   from '@angular/forms';

const routes: Routes = [
    {
        path: '', component: PostsAddEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule,FormsModule]
})
export class PostsAddEditRoutingModule {
}
