import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token:any;
 isBooked: boolean = false;
 @Output()parentFunction=new EventEmitter<string>()
 @Input() title:any;


  constructor(public router: Router) { }
  ngOnInit(): void {
    this.parentFunction.emit("Library Project");
    

  }
  tokenReplace():boolean {
    this.token=sessionStorage.getItem('token');
    console.log("Chandan Pandey  "+this.token);
    if(this.token)
    return true;
    else
    return false;
  }
book()
{
  this. isBooked = true;
}
}





