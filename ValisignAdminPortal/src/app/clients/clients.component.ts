import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiIntegrationsService } from '../api-integrations.service';
import { FormArray,FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';



// import 'datatables.net';
declare var $: any;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  clientEditSelectedData:any;
@ViewChild('modalClose') updateModel:any;
// dropdownList = [];
// dropdownSettings:IDropdownSettings={};
  editFormClientChanges: FormGroup = new FormGroup({
    changeName: new FormControl(),
    changeEmail: new FormControl(),
    changePhone: new FormControl(),
  });
  originalUrl: any;
  // location: any;


  constructor(private router:Router,private service: ApiIntegrationsService,private location: Location,private clientChangeBuilder: FormBuilder) {
    this.originalUrl = this.location.path(); 
   }
  clientsDataArray: any = [];
  ngOnInit() {
  



    this.readClients();

    this.editFormClientChanges = this.clientChangeBuilder.group({
      changeName: ['', [Validators.required]],
      changeEmail: ['', [Validators.required]],
      changePhone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    })
    
  }
  
  registerFormGroup=this.clientChangeBuilder.group({
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    phone:['',[Validators.required,Validators.maxLength(10)]],
    address:['',[Validators.required]],
    address1:['',[Validators.required]],
    city:['',[Validators.required]],
    country:['',[Validators.required]],
    zipcode:['',[Validators.required]],
    app:  this.clientChangeBuilder.array([
      this.clientChangeBuilder.control('')
    ])

  });
 
   clientDataTable(){
     const table=$(document).ready(() => {
      console.log("checking ready");
      $('#clientDataTable').DataTable({
        paging: true,   // Enable pagination
        ordering: true, // Enable sorting
        // Other options you may need
  
      
        
      });
    });
   }
   tableDestroy(){
    var table = $('#clientDataTable').DataTable();
    table.destroy();
  
   }
  readClients() {
    this.service.readClients().subscribe((data: any) => {
      console.log("datadata: " + data);
      const clientsData: any = data;
      if (clientsData.status != null) {
        console.log('clientsData: ');

        if (clientsData.status === 200) {

          console.log("readclients data 200: " + JSON.stringify(clientsData))
          this.clientsDataArray = clientsData.data;
          this.clientDataTable();
        } else {
          console.log("readclients data 400: " + JSON.stringify(clientsData))
          console.log("READLIENTS"+JSON.stringify(clientsData))
        }
      }
    }, (error)=> {
      console.log("read client error")
    });
  }



  editClientData(index: any) {
    this.clientEditSelectedData = this.clientsDataArray[index];
 
    this.location.replaceState('/clients'+'/editDetails/'+this.clientEditSelectedData.clientId);
    this.editFormClientChanges.setValue({
      changeName: this.clientEditSelectedData.name,
      changeEmail: this.clientEditSelectedData.email,
      changePhone: this.clientEditSelectedData.phone,
    });
    console.log("clientData: "+JSON.stringify(this.clientEditSelectedData))
  }


  saveChanges() {
    if(this.editFormClientChanges.invalid){
      return;
    }
   else{ 
    this.tableDestroy();
   
    this.location.replaceState(this.originalUrl);
    
    console.log("edited changes for client: "+ JSON.stringify(this.editFormClientChanges.value))
    Swal.fire({
      title: 'Confirm action',
      text: 'Are you sure you want to continue?',
      icon: 'question',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const clientData ={"name":this.editFormClientChanges.value.changeName,
      "email":this.editFormClientChanges.value.changeEmail,"phone":this.editFormClientChanges.value.changePhone
    };
        const clientId= this.clientEditSelectedData.clientId;
        console.log("clientId: " + this.clientEditSelectedData.clientId+" :: clientData: "+JSON.stringify(clientData));

        this.service.updateClientByClientId(clientData, clientId).subscribe((data: any) => {
          console.log("datadata: " + data);
          const clientsData: any = data;
          if (clientsData.status != null) {
            if (clientsData.status === 200) {
              // this.updateModel.nativeElement.click();
              this.readClients();
            } else {
              console.log("readclients data 400: " + JSON.stringify(clientsData))
            }
          }
        });
      }
    }).catch((error) => {
      console.error("edit client data error")
    });


  }}
  deleteClientData(index: any) {
    this.tableDestroy();
    this.clientEditSelectedData = this.clientsDataArray[index];
    this.location.replaceState('/clients'+'/deleteDetails/'+this.clientEditSelectedData.clientId);
    console.log("delete client data: "+JSON.stringify(this.clientEditSelectedData));
    Swal.fire({
      title: 'Confirm action',
      text: 'Are you sure you want to delete?',
      icon: 'question',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
      const clientId= this.clientEditSelectedData.clientId;
        console.log("clientId: " + this.clientEditSelectedData.clientId);
        this.service.deleteClientByClientId(clientId).subscribe((data: any) => {
          console.log("datadata: " + data);
          const clientsData: any = data;
          if (clientsData.status != null) {
            if (clientsData.status === 200) {
              this.readClients();
            } else {
              console.log("readclients data 400: " + JSON.stringify(clientsData))
            }
          }
        });
      } this.location.replaceState(this.originalUrl);
    }).catch((error) => {
      console.error("edit client data error")
    });



  }
  get reg() {
    return this.registerFormGroup.controls;
  }

  get editChangeValues(){
    return this.editFormClientChanges.controls;
  }
  submit()
  { 
    if(this.registerFormGroup.invalid){
      return;
    }
    else{
      this.tableDestroy();
      this.location.replaceState('/clients'+'/addDetails');

     const data=this.registerFormGroup.value;
     console.log("ABCD "+JSON.stringify(this.registerFormGroup.value))
     this.service.addClient(data).subscribe((data:any)=>{
      console.log("clientId "+data.data.clientId);
      console.log("client Secret "+data.data.clientSecret);
      sessionStorage.setItem('x-client-id',data.data.clientId);
      sessionStorage.setItem('x-client-secret',data.data.clientSecret);
      if(data.data)
      {
        Swal.fire({

          title: 'Client Regitration',
          // text: 'This is your API keys'+data.data.clientId,

        });
         this.removeClients()
        this.readClients();
        this.location.replaceState(this.originalUrl);
      }
      else{
       

      }

    });
  }
  }
  onClick() {
    this.location.replaceState(this.originalUrl);
  }
  removeClients(){
    this.registerFormGroup.reset();
  }
  get app() {
    return this.registerFormGroup.get('app') as FormArray;
  }
  addApp() {
    this.app.push(this.clientChangeBuilder.control(''));
  }
removeApp(index:any){
  if(index>0){
  this.app.removeAt(index);
  }
  else{

  }

}
navigateToUserSignUp() {
  console.log("ABCDE")
  this.router.navigate(['/users']);
}
}
