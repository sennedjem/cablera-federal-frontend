import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaComponent } from './media.component';
import { TableModule } from 'ngx-easy-table';
import { MediaResolve } from '../../shared/resolves';

const routes: Routes = [
    {
        path: '', 
        component: MediaComponent, 
        resolve: { 
            mediaResolve : MediaResolve 
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule,
        TableModule
    ],
    providers: [
        MediaResolve
    ]
})
export class MediaRoutingModule {
}
