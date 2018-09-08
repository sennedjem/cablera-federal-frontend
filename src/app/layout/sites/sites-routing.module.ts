import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitesComponent } from './sites.component';
import { FormsModule }   from '@angular/forms';

const routes: Routes = [
    {
        path: '', component: SitesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule,
        FormsModule
    ]
})
export class SitesRoutingModule {
}
