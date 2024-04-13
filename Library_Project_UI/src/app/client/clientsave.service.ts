import { Client } from './client';
import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
// import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientsaveService {
  constructor(
    private http:HttpClient
  ) { }
  usersaveregistration(client:Client){
    console.log("12345"+client);
    return this.http.post('http://localhost:8089/api/vs/auth/clients/register1',client)
  }
}
