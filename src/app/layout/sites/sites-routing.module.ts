import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitesComponent } from './sites.component';
import { TableModule } from 'ngx-easy-table';
import { SitesResolve,TranslationsResolve } from '../../shared/resolves';

const routes: Routes = [
    {
        path: '', 
        component: SitesComponent, 
        resolve: { 
            sitesResolve : SitesResolve,
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
        SitesResolve,
        TranslationsResolve
    ]
})
export class SitesRoutingModule {
}
