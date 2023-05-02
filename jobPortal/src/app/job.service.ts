import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobShoweApi = `${this.urls.apiEndpoint}/show/jobs`;

  constructor(private http: HttpClient, private urls: AppConfigService, private router: Router) { }

  showAllJobs() {
    
    return this.http.get(this.jobShoweApi);
  }
}
