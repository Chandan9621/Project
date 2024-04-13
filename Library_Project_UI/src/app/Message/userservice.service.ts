import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(
    private http:HttpClient
  ) { }
  hello() {
    return this.http.get('http://localhost:9090/hello')

  }
  time() {
    return this.http.get('http://localhost:9090/time')

  }
  //  userdata() {
    //  return this.http.post('http://localhost:9090/auth/signin',null);

  // }


}
