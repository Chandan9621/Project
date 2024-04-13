import { Component, OnInit } from '@angular/core';
import { ApiIntegrationsService } from '../api-integrations.service';
import { error } from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ApiIntegrationsService) { }

  ngOnInit(): void {
    this.appDetails()
    this.readConfig();
    
  }
  appDetails(){
    this.service.appDetails().subscribe((data:any)=>{
      try{
      if(data!=null){
        console.log("AppDetails "+JSON.stringify(data))
   
      }else{
        console.log("Not App Detais")
      }
      }
      catch(error){
        console.log(error)
      }
     } )


      }
      readConfig(){
       
        this.service.readConfig().subscribe((data:any)=>{
          try{
          if(data!=null){
            console.log("Read Config "+JSON.stringify(data))
          }
          else{
            console.log(JSON.stringify(data))
          }
        }
        catch(error){
          console.log(error)
        }
    
      })
    }
  }
 

