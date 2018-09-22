import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SitesEditRoutingModule } from './sites-edit-routing.module';
import { SitesEditComponent } from './sites-edit.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SitesEditRoutingModule
  ],
  declarations: [SitesEditComponent]
})
export class SitesEditModule { }
