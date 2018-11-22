import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { StatModule } from '../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
    	CommonModule, 
    	PostsRoutingModule,
    	TagInputModule,
    	FormsModule,
		ReactiveFormsModule,
		NgxPaginationModule,
    	NgxSmartModalModule.forRoot(),
		TranslateModule,
		StatModule,
		NgbModule
    ],
    declarations: [PostsComponent],
    bootstrap: [PostsComponent]
})
export class PostsModule {}
