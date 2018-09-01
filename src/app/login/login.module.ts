import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { PopupModule } from '../shared';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        PopupModule,
        FormsModule,
        //ReactiveFormsModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
