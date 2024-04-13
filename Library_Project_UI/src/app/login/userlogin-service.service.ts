import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
// import { Userlogin } from './Userlogin';
import { BehaviorSubject } from 'rxjs';
import{Router} from '@angular/router'
import { Userlogin } from './userlogin';

@Injectable({
  providedIn: 'root'
})
export class UserloginServiceService {
  isLogged=new BehaviorSubject<boolean>(false);
  user:any;
  profile:any;
  parsedArray:any;
  t1: any;
  credintials: any;
  // t1: any;


  constructor(

    private http:HttpClient,private router: Router) { }

  login(login: Userlogin) {
   return this.http.post('http://localhost:9090/auth/signin', login);

  //  return this.http.post('http://localhost:9090/auth/signin', login,{observe:'response'}).subscribe((result)=>
  //  {
  //   this.isLogged.next(true);
  //   // this.router.navigate(['/selectionbook']);
  //      this.router.navigate(['/book']);
  //      this.router.navigate(['/profile']);
  //  });

   }
  //  login2(login:Userlogin)
  //  {
  //   return this.http.post('http://localhost:9090/auth/signin', login,{observe:'response'}).subscribe((result)=>
  //  {
  //    this.isLogged.next(true);
  //    this.router.navigate(['/selectionbook']);
  //      //this.router.navigate(['/book']);
  //      //this.router.navigate(['/profile']);
  //   });

   }



