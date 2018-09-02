import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { PopupModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    PopupModule
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
