import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';

@NgModule({
	imports: [
		CommonModule, 
		TranslateModule,
		MediaRoutingModule
	],
	declarations: [MediaComponent]
})
export class MediaModule {}
