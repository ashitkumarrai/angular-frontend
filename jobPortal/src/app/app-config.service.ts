import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  apiEndpoint: string;
  API_REGISTER_PATH: string;
  API_LOGIN_PATH: string;


  constructor() {
      //Main URL
      this.apiEndpoint = 'http://localhost:8080';

      //Suffixes
      this.API_REGISTER_PATH = 'register';
      this.API_LOGIN_PATH = 'auth/login';

  }
}
