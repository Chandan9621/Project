import { Injectable } from '@angular/core';
import { SignUp } from './signup';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http:HttpClient
  ) { }
  usersaveregistration(signup:SignUp){
    console.log("12345"+signup);
    return this.http.post('http://localhost:8089/api/vs/auth/users/signUp1',signup)
  }
}
