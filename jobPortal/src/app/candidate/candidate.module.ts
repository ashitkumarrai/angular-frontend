import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CandidateHomeComponent } from './candidate-home/candidate-home.component';



@NgModule({
  declarations: [
 
  
    CandidateHomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CandidateModule { }
