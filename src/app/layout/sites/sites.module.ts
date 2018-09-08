import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SitesRoutingModule } from './sites-routing.module';
import { SitesComponent } from './sites.component';

@NgModule({
    imports: [CommonModule, 
        TranslateModule,
        SitesRoutingModule
    ],
    declarations: [SitesComponent]
})
export class SitesModule {}
