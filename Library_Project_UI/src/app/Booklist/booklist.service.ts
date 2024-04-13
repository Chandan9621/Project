import { __values } from 'tslib';
import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BooklistService {
  isEdit:any=false;
  userid:any;
  token:any ="Bearer "+sessionStorage.getItem("token");
  // eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJWaW5heSIsImV4cCI6MTY5MDk1MTUwOX0.GMkvDyk-MAKD6B9BTHayQvGI3RE2PH8S1Dhpmog9CnD63PK2gbaTr4D9dJ_kGOQxGhY-SQPXlrXCCN2gTfH5fw";
  headers=new HttpHeaders()
  //HttpHeaders to set a specific header value
  .set('Authorization',this.token);



  // book:any[]=[];
  constructor(
    private http:HttpClient
  ) { }
  books() {
    return this.http.get('http://localhost:9090/books')

  }
  bookselect(book:any[])
  { const userId = 6;
    console.log("+++++++++====="+book);
   this.userid=sessionStorage.getItem("userid");
   console.log(sessionStorage.getItem("userid"));
   console.log(sessionStorage.getItem("username"));
   console.log('http://localhost:9090/user/'+this.userid+'/books/selectlistofbook')
  console.log(this.headers);
  //the code is making a POST request to a specific URL endpoint, sending book as the payload, and including the headers specified in this.headers
     return this.http.post('http://localhost:9090/user/'+this.userid+'/books/selectlistofbook',book,{'headers':this.headers});
  }


}
