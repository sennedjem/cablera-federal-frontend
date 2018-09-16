import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { PostsAddEditRoutingModule } from './posts-add-edit-routing.module';
import { PostsAddEditComponent } from './posts-add-edit.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
    imports: [
    	CommonModule, 
    	PostsAddEditRoutingModule,
    	TagInputModule,
    	FormsModule,
    	ReactiveFormsModule,
    	NgxSmartModalModule.forRoot(),
    	TranslateModule],
    declarations: [PostsAddEditComponent],
    bootstrap: [PostsAddEditComponent]
})
export class PostsAddEditModule {}
