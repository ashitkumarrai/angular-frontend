import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CandidateSignupComponent } from '../auth/candidate-signup/candidate-signup.component';
import { EmployerSignupComponent } from '../auth/employer-signup/employer-signup.component';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  data: any;

  ngOnInit(): void {
  }
  constructor(public dialog: MatDialog) {}

  openCandidateDialog(): void {
    const dialogRef = this.dialog.open(CandidateSignupComponent, {
      height: '44rem',
      width: '45rem',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
    });

  }

  openEmployerDialog(): void {
    const dialogRef = this.dialog.open(EmployerSignupComponent, {
      height: '45rem',
      width: '45rem',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
    });
  }
  openLoginDialog(): void{
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '26rem',
      width: '30rem',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
    });
  }

}
