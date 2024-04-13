import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Usersave } from './usersave';

@Injectable({
  providedIn: 'root'
})
export class UsersaveregistrationService {

  constructor(
    private http:HttpClient
  ) { }
  usersaveregistration(usersave:Usersave){
    console.log("12345"+usersave);
    return this.http.post('http://localhost:9090/user',usersave)
  }
}
