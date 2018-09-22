import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'sites', loadChildren: './sites/sites.module#SitesModule' },
            { path: 'sites/new', loadChildren: './sites-edit/sites-edit.module#SitesEditModule' },
            { path: 'sites/:id', loadChildren: './sites-edit/sites-edit.module#SitesEditModule' },
            { path: 'posts', loadChildren: './posts/posts.module#PostsModule' },
            { path: 'posts/:id', loadChildren: './posts/posts-add-edit/posts-add-edit.module#PostsAddEditModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
