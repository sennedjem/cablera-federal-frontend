import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
    imports: [CommonModule, PostsRoutingModule,TagInputModule,FormsModule,ReactiveFormsModule,NgxSmartModalModule.forRoot()],
    declarations: [PostsComponent],
    bootstrap: [PostsComponent]
})
export class PostsModule {}
