import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MediaEditRoutingModule } from './media-edit-routing.module';
import { MediaEditComponent } from './media-edit.component';
import { PopupModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MediaEditRoutingModule,
    PopupModule
  ],
  declarations: [MediaEditComponent]
})
export class MediaEditModule { }
