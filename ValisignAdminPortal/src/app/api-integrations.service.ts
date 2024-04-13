import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiIntegrationsService {
  editUserTableData:any;
// headers = new HttpHeaders().set('Content-Type', 'application/json').set('language',"en");
  constructor(private http: HttpClient) { }
  valisignUrl= "http://localhost:9090/api/vs";
  // valisignUrl= "https://dev1.valisign.aitestpro.com";



  public valisignUserSignUP(data: any) {
    let clientId=""+ sessionStorage.getItem('x-client-id');
    let clientSecret= ""+sessionStorage.getItem('x-client-secret');
    console.log("clientId: "+clientId+" clientSecret: "+clientSecret )
     const headers = new HttpHeaders().set('language',"en").set('Content-Type', 'application/json').set('x-client-id',clientId).set('x-client-secret',clientSecret);
     return this.http.post(this.valisignUrl +"/auth/users/signUp", data,{'headers': headers });
   }
   public loginValidate(data: any) {
     const headers = new HttpHeaders().set('language',"en").set('Content-Type', 'application/json');
     return this.http.post(this.valisignUrl +"/admin/signIn",data);
   }
   addConfig(data:any)
 {
  const headers = new HttpHeaders().set('Content-Type', 'application/json').set('language',"en");
  return this.http.post(this.valisignUrl+"/app/configure/add", data,);

 }
 //Adding users data
 addUser(data:any)
 {
  return this.http.post(this.valisignUrl+"/users/create", data);

 }
 //Read clients data
 public readClients(): Observable<any> {
  const headers = new HttpHeaders().set('Content-Type', 'application/json').set('language',"en");
     return this.http.get(this.valisignUrl + "/clients/read");
}
//Update client data
 public updateClientByClientId(data: any, clientIdInput:any) {
  const headers = new HttpHeaders().set('Content-Type', 'application/json').set('language',"en");
  return this.http.put(this.valisignUrl + "/clients/"+clientIdInput, data);
}
//Delete clients data.
public deleteClientByClientId(clientId: any) {
  const headers = new HttpHeaders().set('Content-Type', 'application/json').set('language',"en");
  return this.http.delete(this.valisignUrl + "/clients/"+clientId);
}
//Add client
 addClient(data:any){
  // const headers = new HttpHeaders().set('Content-Type', 'application/json').set('language',"en");
  return this.http.post(this.valisignUrl+"/auth/clients/register", data);
 }
 //Update config data
 public updateConfigById(data: any, configId:any) {
 
  const headers = new HttpHeaders().set('Content-Type', 'application/json').set('language',"en");
  return this.http.put(this.valisignUrl + "/app/configure/update/"+configId, data);
}
//Delete config data
public deleteConfigById(data: any) {
  let clientId=""+ sessionStorage.getItem('x-client-id');
  const headers = new HttpHeaders().set('Content-Type', 'application/json').set('language',"en");
  return this.http.delete(this.valisignUrl +"/app/configure/remove/"+data);
}
public readConfig(): Observable<any> {
  const headers = new HttpHeaders().set('Content-Type', 'application/json').set('language',"en");
  console.log(this.valisignUrl+"/app/configure/read");
  return this.http.get(this.valisignUrl+"/app/configure/read");
}
public updateUserByUserId(data: any, clientIdInput:any) {
  console.log("url: "+this.valisignUrl + "/clients/"+clientIdInput);
  const headers = new HttpHeaders().set('Content-Type', 'application/json').set('language',"en");
  return this.http.put(this.valisignUrl + "/users/"+clientIdInput, data);
}
public deleteUserByUserId(data: any) {
  let clientId=""+ sessionStorage.getItem('x-client-id');
  const headers = new HttpHeaders().set('Content-Type', 'application/json').set('language',"en");
  return this.http.delete(this.valisignUrl +"/users/"+data);
}

public readUsers(): Observable<any> {

  return this.http.get(this.valisignUrl +"/users/read");
}


appDetails(){
  console.log("AppDetails123")
  // const headers = new HttpHeaders().append('Content-Type', 'application/json').append('language',"en");
  return this.http.get(this.valisignUrl +"/admin/appDetails");
}
getUsers(input:any){
  return this.http.get(this.valisignUrl+"/user/"+input)

}
public updateUserByUserId1(data: any, clientIdInput:any) {
  console.log(data+"data");
  console.log("UserId "+clientIdInput)
  console.log("url: "+this.valisignUrl + "/clients/"+clientIdInput);
  const headers = new HttpHeaders().set('Content-Type', 'application/json').set('language',"en");
  return this.http.put(this.valisignUrl + "/users/"+clientIdInput, data);
}

// addUser(data:any)
// {
//  return this.http.post(this.valisignUrl+"/auth/users/signUp", data);

// }


getTransaction(data:any){
  console.log("data "+data);
  console.log(this.valisignUrl+"/transaction/"+data);
  return this.http.get(this.valisignUrl+"/transaction/"+data);

}
readDevice(){
  return this.http.get(this.valisignUrl +"/device/Details")
 }


}
