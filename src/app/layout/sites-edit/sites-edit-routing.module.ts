import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitesEditComponent } from './sites-edit.component';
import { FormsModule }   from '@angular/forms';
import { TypesResolve } from '../../shared/resolves';
import { SitesFindResolver } from '../../shared/resolves';
import { SitesResolve } from '../../shared/resolves';
import { MediaResolve } from '../../shared/resolves';

const routes: Routes = [
    {
        path: '', 
        component: SitesEditComponent, 
        resolve: { 
            types : TypesResolve,
            site : SitesFindResolver,
            sites : SitesResolve,
            medias : MediaResolve
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
        TypesResolve,
        SitesFindResolver,
        SitesResolve,
        MediaResolve
    ]
})
export class SitesEditRoutingModule {
}