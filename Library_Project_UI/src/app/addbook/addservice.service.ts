import { __values } from 'tslib';
import { Injectable } from '@angular/core';
import { Addbooks } from './addbooks';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddserviceService {
  // const emptyJsonObject = {};
  // jsonString:any;
  constructor(private http:HttpClient) { }
  save(addbook: Addbooks) {
    return this.http.post('http://localhost:9090/book',addbook);
  }
ngOnInit(): void {
}
updateBook(jsonString:Addbooks, bookid:any): Observable<any> {
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'// Set the correct Content-Type header here
    })
  };

  // this. jsonString = JSON.stringify(editedData);
   console.log("SAI"+jsonString)
  return this.http.put('http://localhost:9090/book/'+bookid,jsonString,httpOptions);
}
  
deleteBook(bookid:any) {
  console.log("=================>>>>>>>>>>>"+bookid)

  return this.http.delete('http://localhost:9090/book/'+bookid);

}
}



