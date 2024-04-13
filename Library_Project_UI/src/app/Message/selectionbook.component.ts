import { Userlogin } from '../login/userlogin';
import { Component } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { UserloginServiceService } from '../login/userlogin-service.service';

@Component({
  selector: 'app-selectionbook',
  templateUrl: './selectionbook.component.html',
  styleUrls: ['./selectionbook.component.css']
})
export class SelectionbookComponent {

  hello:any;
  time:any;
  user_id: any;
  userid:any;
  username:any;
  userdob:any;
date:any;
today: Date = new Date();
   constructor(private service:UserserviceService,private loginservice:UserloginServiceService ){}
   ngOnInit(): void {
  this.userid = sessionStorage.getItem("userid");

    this.username = sessionStorage.getItem("username");

    this.userdob = sessionStorage.getItem("userdob");
    console.log(this.loginservice.profile);

    this.service.hello().subscribe((data:any)=>{
     this.hello=data.message
      console.log(data);

    });
       this.service.time().subscribe((data:any)=>{
      this.time=data.message
       console.log(data);
  });
//   this.service.userdata().subscribe((data:any)=>{
//     this.userdata=data.data
//      console.log(data);
// });
}

}
