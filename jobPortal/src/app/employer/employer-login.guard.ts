import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployerLoginGuard implements CanActivate {

  isAuthenticated!: boolean;

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.isAuthenticated = localStorage.getItem("authority") == "EMPLOYER";
       
   
      if (!this.isAuthenticated) {
          this.router.navigate(['/']);
      }
      return this.isAuthenticated;
  }
  
}
