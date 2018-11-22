import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { StatComponent } from './stat.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        TagInputModule,
        FormsModule,
        RouterModule
    ],
    declarations: [StatComponent],
    exports: [
        StatComponent,
        RouterModule
    ]
})
export class StatModule {}
