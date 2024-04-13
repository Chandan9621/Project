import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiIntegrationsService } from '../api-integrations.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import 'datatables.net';
// import { MatDialog } from '@angular/material/dialog';
declare var $: any;

@Component({
  selector: 'app-clients',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  configEditSelectedData:any;
   editFormConfigChanges: FormGroup = new FormGroup({
    changeName: new FormControl(),
    changeCkey: new FormControl(),
    changeCvalue: new FormControl(),
  });
  originalUrl: any;
  // registerFormGroup=FormGroup;
  

  constructor(private location: Location,private service: ApiIntegrationsService, private configChangeBuilder: FormBuilder,private fb:FormBuilder) {
    this.originalUrl = this.location.path(); 
    
  }
  registerFormGroup=this.fb.group({
    name:['',[Validators.required]],
    ckey:['',[Validators.required]],
    cvalue:['',[Validators.required]],
    // address:['',[Validators.required]]

  });
  
   
  configDataArray: any = [];

  ngOnInit(): void {
    this.readConfig();
    // this.main();
    this.editFormConfigChanges = this.configChangeBuilder.group({
      changeName: ['', [Validators.required]],
      changeCkey: ['', [Validators.required]],
      changeCvalue: ['', [Validators.required]]
    })  
  }


  configDataTable(){
    $(document).ready(() => {
      console.log("checking ready");
      $('#configDataTable').DataTable({
        paging: true,   // Enable pagination
        ordering: true, // Enable sorting
        // Other options you may need
      });
    
    });
   }
   tableDestroy(){
    var table = $('#configDataTable').DataTable();
    table.destroy();
   }
//    openDialog(index:any): void {
//     const dialogRef = this.dialog.open( 
//       this.editConfigData(index){
//     height: '500px',
//     width: '400px',
    
     
//   });
 
// }

  readConfig() {
    console.log("read config");
    this.service.readConfig().subscribe((data: any) => {
      const configData: any = data;
      if (configData.status != null) {

        if (configData.status === 200) {

          console.log("readconfig data 200: " + JSON.stringify(configData))
          this.configDataArray = configData.data;
          this.configDataTable();
        } else {
          console.log("readclients data 400: " + JSON.stringify(configData))
        }
      }
    });
  }
  onClick() {
    this.location.replaceState(this.originalUrl);
  }


  editConfigData(index: any) { 
    this.configEditSelectedData = this.configDataArray[index];
    console.log("ABCD "+this.configEditSelectedData.name);
    console.log("ABCDE "+this.configEditSelectedData.ckey);
    this.configEditSelectedData = this.configDataArray[index];
    this.location.replaceState('/configurations'+'/editDetails/'+this.configEditSelectedData.id);
      this.editFormConfigChanges.setValue({
      changeName: this.configEditSelectedData.name,
      changeCkey: this.configEditSelectedData.ckey,
      changeCvalue: this.configEditSelectedData.cvalue,
     

    });
    console.log("config"+JSON.stringify(this.configEditSelectedData))
  }

  saveChanges() {
    if(this.editFormConfigChanges.invalid) {
      // alert("User Invalid")
      return;
    }
    else{
    this.tableDestroy();
    this.location.replaceState(this.originalUrl);
    console.log("edited changes for client: "+ JSON.stringify(this.editFormConfigChanges.value))
    Swal.fire({
      title: 'Confirm action',
      text: 'Are you sure you want to continue?',
      icon: 'question',
      showCancelButton: true,
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        // const clientData = this.editFormClientChanges.value;
        const configData ={"name":this.editFormConfigChanges.value.changeName,
      "ckey":this.editFormConfigChanges.value.changeCkey,"cvalue":this.editFormConfigChanges.value.changeCvalue};
        const configId= this.configEditSelectedData.id;
        // console.log("clientId: " + this.configEditSelectedData.clientId+" :: clientData: "+JSON.stringify(clientData));

        this.service.updateConfigById(configData,configId).subscribe((data: any) => {
          console.log("datadata: " + data);
          const clientsData: any = data;
          if (clientsData.status != null) {
            if (clientsData.status === 200) {
               this.readConfig();
            } else {
              // console.log("readclients data 400: " + JSON.stringify(userData))
            }
          }
        });
      }
    }).catch((error: any) => {
      console.error("edit client data error")
    });


  }}
  deleteConfigData(index: any) {
    this.tableDestroy();
    this.configEditSelectedData = this.configDataArray[index];
    this.location.replaceState('/clients'+'/deleteDetails/'+this.configEditSelectedData.id);
    console.log("delete client data: "+JSON.stringify( this.configEditSelectedData));
    Swal.fire({
      title: 'Confirm action',
      text: 'Are you sure you want to delete?',
      icon: 'question',
      showCancelButton: true,
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        // const clientData = this.editFormClientChanges.value;
        const userData ={"name":this.editFormConfigChanges.value.changeName,
      "email":this.editFormConfigChanges.value.changeEmail,"phone":this.editFormConfigChanges.value.changePhone};

      const userId= this.configEditSelectedData.id;
        console.log("clientId: " + this.configEditSelectedData.userId+" :: clientData: "+JSON.stringify(userData));

        this.service.deleteConfigById(this.configEditSelectedData.id).subscribe((data: any) => {
          console.log("datadata: " + data);
          const usersData: any = data;
          if (usersData.status != null) {
            if (usersData.status === 200) {

              this.readConfig();
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

  submit()
  {   if(this.registerFormGroup.invalid) {

    return;
  }
  else{
    this.tableDestroy();
     const data=this.registerFormGroup.value;
     this.location.replaceState('/configurations'+'/addDetails');
     console.log(JSON.stringify(this.registerFormGroup.value))
     this.service.addConfig(data).subscribe((data:any)=>{
      console.log("config data: "+data);
      if(data.data)
      {
        Swal.fire({

          title: 'Device configuration successful ',

          // text: 'Registration is not done.',

        });
        console.log('config data'+data);
        this.removeConfig()
        // alert("Config Register Sucessfully");
        this.readConfig();
        this.location.replaceState(this.originalUrl);
      }
      else{
        Swal.fire({

          title: 'Device configuration not successful',

          // text: 'Registration is not done.',

        });

      }




   });

  }
  }
  removeConfig(){
    this.registerFormGroup.reset();
  }











}
  
 
  
