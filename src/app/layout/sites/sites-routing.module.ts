import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitesComponent } from './sites.component';
import { TableModule } from 'ngx-easy-table';
import { SitesResolve } from '../../shared/resolves';

const routes: Routes = [
    {
        path: '', 
        component: SitesComponent, 
        resolve: { 
            sitesResolve : SitesResolve 
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
        SitesResolve
    ]
})
export class SitesRoutingModule {
}
