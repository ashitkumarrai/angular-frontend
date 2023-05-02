import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConfigService } from './app-config.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



interface Token {
  token: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  candidateSignupApi = `${this.urls.apiEndpoint}/candidate/signup`;
  employerSignupApi = `${this.urls.apiEndpoint}/employer/signup`;
  authUserTokenApi = `${this.urls.apiEndpoint}/auth/usertoken`;

  profileApi = `${this.urls.apiEndpoint}/profile`;


  public token: any;
  public loggedUser: any;

  public loggedInStatus = new BehaviorSubject<boolean>(false);


  constructor(private http: HttpClient, private urls: AppConfigService, private dialog: MatDialog, private router: Router) { }

  candidateSignup(data: any): Observable<any> {
    return this.http.post(this.candidateSignupApi, data);
  }


  employerSignup(data: any): Observable<any> {
    return this.http.post(this.employerSignupApi, data);
  }

  getToken(data: any) {
    return this.http.post(this.authUserTokenApi, data);

  }

  getLoggedinProfile() {

    return this.http.get(this.profileApi);

  }








  // }

  /* 
  loginUser(user: any): Observable<any> {
    return this.getToken(user).pipe(
      tap((res: any) => {
        const token: Token = res;
        this.token = token.token;
        if (this.token) {
          this.loggedUser = res;
          this.isAuthenticated = true
          this.loggedInStatus.next(true);
          console.log(this.loggedUser);
          
          this.saveAuthData(this.loggedUser);
        }
      }),
      catchError((error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Login failed !...',
          text: `${error.error.detail}`
        })
        this.dialog.closeAll();
        this.loggedInStatus.next(false);
        return throwError(error);
      })
    );
 
 
    
  }
  
  
 
 
 */






  //Save Auth Data


  saveAuthData(user: any) {

    localStorage.setItem('token', user.token);
    localStorage.setItem('email', user.user.email);
    localStorage.setItem('username', user.user.username);
    localStorage.setItem('authority', user.user.authorities[0].authority);

  }

  getAuthData(): any {

    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    const username = localStorage.getItem('username');
    const authority = localStorage.getItem('authority');



    if (!token) {
      return;
    }
    return {
      token: token,
      email: email,
      username: username,
      authority: authority
    }
  }



  logoutUser() {
    localStorage.removeItem('user');
    this.loggedInStatus.next(false);
    this.router.navigate(['/']);
  }




  login(user: any) {
    this.http.post(this.authUserTokenApi, user).subscribe({
      next: (res: any) => {
        const token: Token = res;
        this.token = token.token;
        if (this.token) {

          this.loggedUser = res;


          this.loggedInStatus.next(true);

          console.log(this.loggedUser);

          this.saveAuthData(this.loggedUser);
        }
      },

      error: error => {
        Swal.fire({
          icon: 'error',
          title: 'Login failed !...',
          text: `${error.error.detail}`


        })



        this.dialog.closeAll();
        this.loggedInStatus.next(false);
      }
    });
  


  }




  loginUser(user: any) {

    this.login(user);



  }

}