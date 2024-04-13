import { FormBuilder, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  data:any;
  registrationForm:any;
  // tit="ABC";
   usersave:any;
   constructor(private service:SignupService,private fb:FormBuilder){}
ngOnInit():void{
  this.registrationForm=this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    phone:['',[Validators.required]],
    // address:['',[Validators.required]]

  });
}
get reg() {
  return this.registrationForm.controls;
}
adduser() {

  if(this.registrationForm.invalid) {
    // alert("User Invalid")
    return;
  }

  else{

  //  adduser()
  this.usersave = <SignupService> this.registrationForm.value;
      // console.log("1234567cp"+this.usersave);
       this.service.usersaveregistration(this.usersave).subscribe((data:any)=>{
        if(data.data)
        {
          console.log('User data',data);
          alert("User Register Sucessfully");


        }
        else{
          console.log('User data',data);
          alert("User is not Under Age");

        }




     })
}
}
  // function adduser() {
  //   throw new Error('Function not implemented.');
  }


