import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  candidateSignupApi = `${this.urls.apiEndpoint}/candidate/signup`;
  employerSignupApi = `${this.urls.apiEndpoint}/employer/signup`;
  authUserTokenApi = `${this.urls.apiEndpoint}/auth/usertoken`;

  profileApi = `${this.urls.apiEndpoint}/profile`;


  constructor(private http: HttpClient,private urls:AppConfigService) { }

  candidateSignup(data:any): Observable<any>{
    return this.http.post(this.candidateSignupApi,data);
  }


  employerSignup(data:any): Observable<any>{
    return this.http.post(this.employerSignupApi,data);
  }

  getToken(data: any) {
    return this.http.post(this.authUserTokenApi,data);

  }

  getLoggedinProfile(data: any) {

    return this.http.post(this.profileApi,data);

  }

}

