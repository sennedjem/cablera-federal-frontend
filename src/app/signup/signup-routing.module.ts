import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { FormsModule }   from '@angular/forms';

const routes: Routes = [
    {
        path: '', component: SignupComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule,
        FormsModule
    ]
})
export class SignupRoutingModule {}