import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Route, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  route: any;
  constructor(private routes: Router) { this.route = routes }

  loginActive() {
    let token = sessionStorage.getItem('token');
    console.log("token value123: " + token)
    if(token) {
      // console.log("login activated")
      return true;
    }
    // console.log("login false")
    this.route.navigate(['/login']);
    return false;
  }
  adminAlreadyLogin() {
    let token = sessionStorage.getItem('token');
    console.log("token value12: " + token)
    if(token) {
     this.route.navigate(['/']);
      return false;
    }
    return true;
  }
}

export const loginAuthGuard: CanActivateFn = (): boolean => {
  return inject(AuthGaurdService).loginActive();
}
export const adminAlreadyLogin: CanActivateFn = (): boolean => {
  return inject(AuthGaurdService).adminAlreadyLogin();
}
