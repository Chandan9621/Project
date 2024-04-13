import { Component, OnInit } from '@angular/core';
import { ApiIntegrationsService } from '../api-integrations.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-usertables',
  templateUrl: './usertables.component.html',
  styleUrls: ['./usertables.component.css']
})
export class UsertablesComponent implements OnInit {
  usersData: any;
  usersDataArray: any [] = [];
  userEditSelectedData: any;
  originalUrl: string;
 xyz:any;
  constructor(private location: Location,public service:ApiIntegrationsService,private userChangeBuilder:FormBuilder) { 
    this.originalUrl = this.location.path();
  }
    editFormUserChanges: FormGroup = new FormGroup({
    changeName: new FormControl(),
    changeEmail: new FormControl(),
    changePhone: new FormControl(),
  });
  ngOnInit(): void {
    this.readUsers();
       this.editFormUserChanges = this.userChangeBuilder.group({
      changeName: ['', [Validators.required]],
      changeEmail: ['', [Validators.required]],
      changePhone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    })
    // changeName1: new FormControl(),
    // changeLocation:new FormControl(),
    // changeAddress:new FormControl(),
    // changeType:new FormControl(),   
    // changeEmail1:new FormControl(),
    // changePhone1:new FormControl(),
    // changeDeviceId:new FormControl()


    
  }


  readUsers() {

   const t=JSON.stringify(this.service.editUserTableData.userId)
   const unquotedString = t.replace(/"/g, '');
   console.log(unquotedString)
       this.service.getUsers(unquotedString).subscribe((data:any)=>{
        if(data!=null){
          console.log("ABCDE"+JSON.stringify(data.data))
          console.log("ABCDEFGH"+JSON.stringify(data.data.deviceData))
      
        this.usersDataArray.push(data.data)
        console.log("userDataArray "+this.usersDataArray)
        }
        });
  
        } 

      
        editUserData(index: any) {
          
          //  console.log("ABCDE")
          // this.router.navigate(['/userData'])
          // console.log("CP1 "+JSON.stringify(this.usersDataArray[index].deviceData))
          // this.userEditSelectedData = JSON.stringify(this.usersDataArray[index].data.name);
          // console.log("CP2 "+this.userEditSelectedData)
          // this.editFormUserChanges.patchValue(this.userEditSelectedData);
    
       
          this.userEditSelectedData = this.usersDataArray[index];
          // this.location.replaceState('/users'+'/editDetails/'+this.userEditSelectedData.userId);
            this.editFormUserChanges.setValue({
            changeName:this.userEditSelectedData.data.name,
            changeEmail: this.userEditSelectedData.data.email,
            changePhone:this.userEditSelectedData.data.phone,
            // changeName1:this.userEditSelectedData.deviceData.name,
            // changeDeviceId:this.userEditSelectedData.deviceData.deviceId,
            // changeLocation:this.userEditSelectedData.deviceData.location,
            // changeAddress:this.userEditSelectedData.deviceData.ipAddress,
            // changeType:this.userEditSelectedData.deviceData.type,
            // changeEmail1:this.userEditSelectedData.appData.email,
            // changePhone1:this.userEditSelectedData.appData.phone,
           
      
          });
          console.log("user"+JSON.stringify(this.userEditSelectedData))
          // this.service.editUserTableData=this.userEditSelectedData;
        }
        onClick() {
          this.location.replaceState(this.originalUrl);
        }
        get editChangeValues(){
          return this.editFormUserChanges.controls;
        }
        saveChanges() {
          if(this.editFormUserChanges.invalid) {
         
            return;
          }
          else{
         
          // this.location.replaceState(this.originalUrl);
          console.log("edited changes for users: "+ JSON.stringify(this.editFormUserChanges.value.changeName))
          Swal.fire({
            title: 'Confirm action',
            text: 'Are you sure you want to continue?',
            icon: 'question',
            showCancelButton: true,
          }).then((result: { isConfirmed: any; }) => {
            if (result.isConfirmed) {
              // const clientData = this.editFormClientChanges.value;
              const userData ={
                 "name":this.editFormUserChanges.value.changeName,
                 "email":this.editFormUserChanges.value.changeEmail,
                 "phone":this.editFormUserChanges.value.changePhone,
                // "dname":this.editFormUserChanges.value.changeName1,
                // "did":this.editFormUserChanges.value.changeDeviceId,
                // "location":this.editFormUserChanges.value.changeLocation,
                // "address":this.editFormUserChanges.value.changeAddress,
                // "type":this.editFormUserChanges.value.changeType,
                // "clientEmail":this.editFormUserChanges.value.changeEmail1,
                // "clientPhone":this.editFormUserChanges.value.changePhone1,
            };
              
                 const userId= this.userEditSelectedData.data.userId.replace(/"/g, '')
            
                 this.service.updateUserByUserId1(userData, userId).subscribe((data: any) => {
                 const usesrsData: any = data;
                if (usesrsData.status!=null) {
                  if (usesrsData.status===200) {
                    this.readUsers()
                  } else {
                    console.log("readclients data 400:" + JSON.stringify(userData))
                  }
                }
              });
            }this.location.replaceState(this.originalUrl);
          }).catch((error: any) => {
            console.error("edit client data error")
          });
      
      
        }}
      }
    



