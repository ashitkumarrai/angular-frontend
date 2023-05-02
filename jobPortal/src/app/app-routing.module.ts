import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { LoginGuard } from './auth/login.guard';
import { CandidateHomeComponent } from './candidate/candidate-home/candidate-home.component';
import { AdminLoginGuard } from './admin/admin-login.guard';
import { EmployerHomeComponent } from './employer/employer-home/employer-home.component';
import { EmployerLoginGuard } from './employer/employer-login.guard';


const routes: Routes = [
  {
    path: 'candidate', component: CandidateHomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'admin', component: AdminHomeComponent,
    canActivate: [AdminLoginGuard]
  },
  {
    path: 'employer', component: EmployerHomeComponent,
    canActivate: [EmployerLoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
