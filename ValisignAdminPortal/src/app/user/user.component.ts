import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ApiIntegrationsService } from '../api-integrations.service';
import { ChangeDetectorRef } from '@angular/core';
// import { IDropdownSettings } from 'ng-multiselect-dropdown';
import 'datatables.net';
declare var $: any;

@Component({
  selector: 'app-clients',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dropdownList: { item_id: number; item_text: string; }[] = [];
  // items:{name:string;checked:boolean} []
    // dropdownSettings:IDropdownSettings={}; 
  userEditSelectedData:any;
  selectedClients: string[] = [];
  usersDataArray: any = [];
  userData: any=[]
   selectedApps=[];
  usersData:any;
    clientsDataArray :any;
    editFormUserChanges: FormGroup = new FormGroup({
    changeName: new FormControl(),
    changeEmail: new FormControl(),
    changePhone: new FormControl(),
  });
  originalUrl: any;
  // showDropdown = false;

  // toggleDropdown() {
  //   this.showDropdown = this.showDropdown;
  // }
  showDropdown = false;
 

  constructor(private cdr: ChangeDetectorRef,private router: Router,private location: Location,private service: ApiIntegrationsService, private userChangeBuilder: FormBuilder) {
    this.originalUrl = this.location.path(); 
   }
   registerFormGroup=this.userChangeBuilder.group({
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    phone:['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
    // app: [[]], 
    app:['',[Validators.required]],

    // app1:['',[Validators.required]],
    address:[,[Validators.required]],
    address1:['',[Validators.required]],
    city:['',[Validators.required]],
    country:['',[Validators.required]],
    zipcode:['',[Validators.required]],
    // app1:['',[Validators.required]],
    // address:['',[Validators.required]]
    // clientName: ['',[Validators.required]]
    

  });

  ngOnInit(): void {
    // Multiselect dropdown with checkbox -->
  //  this.items = [
  //     { name: 'Item 1', checked: false },
  //     { name: 'Item 2', checked: false },
  //     { name: 'Item 3', checked: false },
  
  //   ];

  // <ng-multiselect-dropdown//
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Item1' },
    //   { item_id: 2, item_text: 'Item2' },
   
    // ];
    // this.dropdownSettings = {
    //   idField: 'item_id',
    //   textField: 'item_text',
    // };
    this.readUsers();
    this.editFormUserChanges = this.userChangeBuilder.group({
      changeName: ['', [Validators.required]],
      changeEmail: ['', [Validators.required]],
      changePhone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    })
    
  
    
      
  
  }
  onClick() {
    this.location.replaceState(this.originalUrl);
  }



  userDataTable(){
    $(document).ready(() => {
      console.log("checking ready");
      $('#usersDataTable').DataTable({
        paging: true,   // Enable pagination
        ordering: true, // Enable sorting
        // Other options you may need
      });
    
    });
   }
   tableDestroy(){
    var table = $('#usersDataTable').DataTable();
    table.destroy();
   }
  

  readUsers() {
    this.readClients();
    this.service.readUsers().subscribe((data: any) => {

      this. usersData = data;
      if (this.usersData.status != null) {
        console.log('clientsData: ');

        if (this.usersData.status === 200) {

          console.log("readclients data 200: " + JSON.stringify(this.usersData))
          this.usersDataArray = this.usersData.data;
          this.userDataTable();
        } else {
          console.log("readclients data 400: " + JSON.stringify(this.usersData))
        }
      }
    });
  }



  editUserData(index: any) {

    this.router.navigate(['/userData'])
    this.userEditSelectedData = this.usersDataArray[index];
    this.userEditSelectedData = this.usersDataArray[index];
    this.location.replaceState('/users'+'/editDetails/'+this.userEditSelectedData.userId);
      this.editFormUserChanges.setValue({
      changeName: this.userEditSelectedData.name,
      changeEmail: this.userEditSelectedData.email,
      changePhone: this.userEditSelectedData.phone,
     

    });
    console.log("user"+JSON.stringify(this.userEditSelectedData))
    this.service.editUserTableData=this.userEditSelectedData;
  }


  saveChanges() {
    if(this.editFormUserChanges.invalid) {
      this.tableDestroy();
      return;
    }
    else{
    this.tableDestroy();
    this.location.replaceState(this.originalUrl);
    console.log("edited changes for client: "+ JSON.stringify(this.editFormUserChanges.value))
    Swal.fire({
      title: 'Confirm action',
      text: 'Are you sure you want to continue?',
      icon: 'question',
      showCancelButton: true,
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        // const clientData = this.editFormClientChanges.value;
        const userData ={"name":this.editFormUserChanges.value.changeName,
          "email":this.editFormUserChanges.value.changeEmail,"phone":this.editFormUserChanges.value.changePhone};
           const userId= this.userEditSelectedData.userId
           this.service.updateUserByUserId(userData, userId).subscribe((data: any) => {
     
          const clientsData: any = data;
          if (clientsData.status != null) {
            if (clientsData.status === 200) {

              this.readUsers();
            } else {
              console.log("readclients data 400: " + JSON.stringify(userData))
            }
          }
        });
      }this.location.replaceState(this.originalUrl);
    }).catch((error: any) => {
      console.error("edit client data error")
    });


  }}


  readClients() {
    this.service.readClients().subscribe((data: any) => {
      console.log("datadata: " + data);
      const clientsData: any = data;
      if (clientsData.status != null) {
        console.log('clientsData: ');
        const clientValue:[] =clientsData.data.clientId
         
        if (clientsData.status === 200) {

          console.log("readclients data 200: " + JSON.stringify(clientsData))
          this.clientsDataArray = clientsData.data;

          console.log("ABCD"+JSON.stringify(this.clientsDataArray))
          
         

        } else {
          console.log("readclients data 400: " + JSON.stringify(clientsData))
        }
      }
    });
  }



  deleteUserData(index: any) {
    this.tableDestroy();
    this.userEditSelectedData = this.usersDataArray[index];
    console.log("delete client data: "+JSON.stringify(this.userEditSelectedData));
    this.location.replaceState('/users'+'/deleteDetails/'+this.userEditSelectedData.userId);
    Swal.fire({
      title: 'Confirm action',
      text: 'Are you sure you want to delete?',
      icon: 'question',
      showCancelButton: true,
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
       
        const userData ={
      "name":this.editFormUserChanges.value.changeName,
      "email":this.editFormUserChanges.value.changeEmail,
      "phone":this.editFormUserChanges.value.changePhone
    };
        const userId= this.userEditSelectedData.userId;
        console.log("clientId: " + this.userEditSelectedData.userId+" :: clientData: "+JSON.stringify(userData));

        this.service.deleteUserByUserId(this.userEditSelectedData.userId).subscribe((data: any) => {
          console.log("datadata: " + data);
          const usersData: any = data;
          if (usersData.status != null) {
            if (usersData.status===200) {
                 this.readUsers();
            } else {
              console.log("readclients data 400: " + JSON.stringify(usersData))
            }
          }
        });
      }this.location.replaceState(this.originalUrl);
    }).catch((error: any) => {
      console.error("edit client data error")
    });



  }
  
  get reg() {
    return this.registerFormGroup.controls;
  }


  removeUsers(){
    this.registerFormGroup.reset();
  }
  get editChangeValues(){
    return this.editFormUserChanges.controls;
  }
  submit()
  {   
    console.log('register submitted')
    if(this.registerFormGroup.invalid) {
      console.log('register invalid')
    this.tableDestroy();
    return;
  }
  else{
    console.log('register valid')
    this.tableDestroy();
     const data=this.registerFormGroup.value;
     this.location.replaceState('/users'+'/addDetails');
     console.log("ABCD "+JSON.stringify(this.registerFormGroup.value))
     this.service.addUser(data).subscribe((data:any)=>{
     if(data.status===200)
      {
        
        Swal.fire({

          title: 'User Registration',

          text: 'Registration sucessful.Please Check Mail',

        });
        const id=data.data.userId;
        console.log("id "+id)
         this.service.getTransaction(id)
        console.log('Email'+JSON.stringify(data.data.email));
        console.log('Phone'+JSON.stringify(data.data.phone));
         this.removeUsers()

         this.location.replaceState(this.originalUrl);


      }
      else{
        Swal.fire({

          title: 'User not registered',
  
          text: 'Registration is not done.',
  
        });

      }
    
    
    



   },(error) => {
    if (error.status===404) {
      
      console.log("data"+data)
      console.log("error: "+JSON.stringify(error));
      Swal.fire({
        // icon: 'error',
        title: 'The email or phone number is already exist.',
        text: 'Please check your email id or phone number.',
      });
  }
   
});

  }
}
get app() {
  return this.registerFormGroup.get('app');
}
addApp() {

}
removeApp(index:any){
if(index>0){

}
else{

}

// userDetails(){
//   this.service.readClients().subscribe((data:any)=>{
//     this.userData=JSON.stringify(data.data.clientId);
//     this.userData=JSON.stringify(this.usersData.data.userId)
//  });
 


}

 toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}











  

  



































































