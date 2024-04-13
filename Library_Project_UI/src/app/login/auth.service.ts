// import { Injectable, inject } from "@angular/core";
// import { CanActivateFn, Router } from "@angular/router";

// @Injectable()

// export class  AuthService{
//   constructor(private router: Router) {}
//      canActivate(): boolean {
//        let isLoggedIn = sessionStorage.getItem("token");
//        if(isLoggedIn) {

//           return true

//         }

//         this.router.navigate(['/log']);

//         return false;

//     }

//     canDeactivate(): boolean {

//       let isLoggedIn = sessionStorage.getItem("token");

//         console.log(isLoggedIn);

//         if(isLoggedIn) {

//           this.router.navigate(['/userprofile']);

//           return false;
//         }

//         return true;

//     }

//   }




//   export const AuthGuard: CanActivateFn = (): boolean => {

//     return inject(AuthService).canActivate();

//   }




//   export const routeGuard: CanActivateFn = (): boolean => {

//     return inject(AuthService).canDeactivate();

//   }




// // isLoggedIn=false;
// // login():boolean
// // {
// //  return true;
// // }

// // isAuthenticated()
// // {
// //   return this.isLoggedIn;
// // }


