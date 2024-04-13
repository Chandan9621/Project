import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { UserserviceService } from '../Message/userservice.service';
import { UserloginServiceService } from '../login/userlogin-service.service';
// import{ UserloginServiceService } from '../Login/userlogin-service.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit,AfterViewInit{
// apply view child for single matching element.
   @ViewChild("tableRef")marker!: ElementRef;
   value:any=this.loginservice.user;
  userid:any;
  username:any;
  userdob:any;
  datetime:any;
  hello:any;
  time:any;
  token:any;
  usercreated:any;
  constructor(private service:UserserviceService,private loginservice:UserloginServiceService ){}
  ngOnInit(): void {
    this.userid = sessionStorage.getItem("userid");
    this.username = sessionStorage.getItem("username");
    this.userdob = sessionStorage.getItem("userdob");
    this.datetime = sessionStorage.getItem("datetime");
    this.token = sessionStorage.getItem("token");

    this.service.hello().subscribe((data:any)=>{
      this.hello=data.message
       console.log(data);

     });
        this.service.time().subscribe((data:any)=>{
        this.time=data.message
        console.log(data);
   });
    // this.usercreated = sessionStorage.getItem("usercreated");


    }
    ngAfterViewInit(): void {
      console.log(this.marker)
      this.marker.nativeElement.style.color="green";
      console.log("hello WOrld")

    }



}




