import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
    	CommonModule, 
    	PostsRoutingModule,
    	TagInputModule,
    	FormsModule,
    	ReactiveFormsModule,
    	NgxSmartModalModule.forRoot(),
		TranslateModule,
		StatModule
    ],
    declarations: [PostsComponent],
    bootstrap: [PostsComponent]
})
export class PostsModule {}
