import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthguardService {
constructor(private router: Router) {}
 canActivate(): boolean {

      let isLoggedIn = sessionStorage.getItem("token");

      if(isLoggedIn) {

        return true

      }

      this.router.navigate(['/log']);

      return false;

  }

  canDeactivate(): boolean {

    let isLoggedIn = sessionStorage.getItem("token");

      console.log(isLoggedIn);

      if(isLoggedIn) {

        this.router.navigate(['']);

        return false;



      }

      return true;

  }

}




export const AuthGuard: CanActivateFn = (): boolean => {

  return inject(AuthguardService).canActivate();

}




export const routeGuard: CanActivateFn = (): boolean => {

  return inject(AuthguardService).canDeactivate();

}




