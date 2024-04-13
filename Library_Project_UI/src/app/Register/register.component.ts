 import { Component } from '@angular/core';
import { UsersaveregistrationService } from './usersaveregistration.service';
import { Usersave } from './usersave';
import { FormBuilder, Validators } from '@angular/forms';


  // import { UsersaveregistrationService } from'./usersaveregistration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  data:any;
  registrationForm:any;
  // tit="ABC";
   usersave:any;
   constructor(private service:UsersaveregistrationService,private fb:FormBuilder){}
ngOnInit():void{
  this.registrationForm=this.fb.group({
    name:['',[Validators.required]],
    dob:['',[Validators.required]]

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
  this.usersave = <Usersave> this.registrationForm.value;
      // console.log("1234567cp"+this.usersave);
       this.service.usersaveregistration(this.usersave).subscribe((data:any)=>{
        if(data.data)
        {
          console.log('User data',data);
          alert("User data Saved Sucessfully");

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

