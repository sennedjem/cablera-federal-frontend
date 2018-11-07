import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaEditComponent } from './media-edit.component';
import { FormsModule }   from '@angular/forms';
import { MediaFindResolver } from '../../shared/resolves';

const routes: Routes = [
    {
        path: '', 
        component: MediaEditComponent, 
        resolve: { 
            media : MediaFindResolver
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule,
        FormsModule
    ],
    providers: [
        MediaFindResolver
    ]
})
export class MediaEditRoutingModule {
}