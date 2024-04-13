import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Component, OnInit, Injectable, Input } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserloginServiceService } from './userlogin-service.service';
import { Userlogin } from './userlogin';
import { Router } from '@angular/router';

// import { UserComponent } from '../user/user.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()

export class LoginComponent implements OnInit{
  // @Input() value:any;
  // userdata:any;
  name:any;
  id:any;
  map:any;
  t1:any
  loginform:any;
  userdetails:any;
  credentials:any;
  // userIds:any;
  // data:any;

   public data :any[]=[];
  // loginform = new FormGroup({

    // name: new FormControl(''),
    // password: new FormControl(''),
// })
  //  private credentials: Userlogin = new Userlogin();
  constructor(private service:UserloginServiceService, private fb:FormBuilder, private router:Router){}


    ngOnInit(): void {

      this.loginform = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(20)]],
      password:['', [Validators.required,Validators.minLength(5), Validators.maxLength(20)]],
    });
    }
     get log() {
      return this.loginform.controls;
    }

  login() {

    if(this.loginform.invalid) {
      // alert("User Invalid")
      return;

    }


      else {
      this.credentials = <Userlogin> this.loginform.value;
       this.t1=this.credentials.password;
       console.log(this.credentials);
       console.log(this.t1);

         this.service.login(this.credentials).subscribe((data:any)=>{
          if(data.data){
          //  this. userIds = data.data.map((item: { user_Id: any; }) => item.user_Id)
          //  console.log(this.userIds[0])
          //  console.log(JSON.stringify(this.data))
          // console.log("ABCD"+this.credentials.password);
           console.log('++++++++++----'+data.data.userdata);
          //  localStorage.setItem('jwt',this.t1);
           this.userdetails=data.data.userdata;
            //  console.log(JSON.stringify(this.userdata))
          
            sessionStorage.setItem("userid", data.data.userdata.userid);
           sessionStorage.setItem("username", data.data.userdata.name);
           sessionStorage.setItem("userdob", data.data.userdata.dob);
           sessionStorage.setItem("datetime", data.data.userdata.datetime);
           sessionStorage.setItem("token", data.JWT);
           console.log("CP! "+data.data.userdata.name);
           console.log("CP"+data.JWT);
           this.router.navigate(['/selectionbook']);
           alert("User Login Sucessfully");
          //  this.service.login2(this.credentials);

        }
         else{
          console.log(this.credentials);
          console.log(data);
         alert("Invalid Credentials");


        }
      })


      }
}
}
