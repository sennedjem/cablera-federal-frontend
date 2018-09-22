import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitesEditComponent } from './sites-edit.component';
import { FormsModule }   from '@angular/forms';
import { TypesResolve } from '../../shared/resolves';

const routes: Routes = [
    {
        path: '', 
        component: SitesEditComponent, 
        resolve: { 
            types : TypesResolve 
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule,
        FormsModule
    ],
    providers: [
        TypesResolve
    ]
})
export class SitesEditRoutingModule {
}