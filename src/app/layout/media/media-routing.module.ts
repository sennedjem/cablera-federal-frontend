import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaComponent } from './media.component';
import { TableModule } from 'ngx-easy-table';
import { MediaResolve,TranslationsResolve } from '../../shared/resolves';

const routes: Routes = [
    {
        path: '', 
        component: MediaComponent, 
        resolve: { 
            mediaResolve : MediaResolve,
            translations: TranslationsResolve
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
        MediaResolve,
        TranslationsResolve
    ]
})
export class MediaRoutingModule {
}
