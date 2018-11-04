import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SitesEditRoutingModule } from './sites-edit-routing.module';
import { SitesEditComponent } from './sites-edit.component';
import { PopupModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SitesEditRoutingModule,
    PopupModule
  ],
  declarations: [SitesEditComponent]
})
export class SitesEditModule { }
