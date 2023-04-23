import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateSignupComponent } from './candidate-signup/candidate-signup.component';
import { EmployerSignupComponent } from './employer-signup/employer-signup.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [

    CandidateSignupComponent,
    EmployerSignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
