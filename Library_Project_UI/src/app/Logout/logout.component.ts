import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  invalid:any;
  constructor(private router:Router){}
  ngOnInit(): void  {

      sessionStorage.removeItem("userid");
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("userdob");
      sessionStorage.removeItem("usercreated");
      this.invalid=sessionStorage.removeItem("token");
      // this.invalid.clear();
      console.log(sessionStorage.getItem("cvbn"+"token"));
      alert("user logout sucessfully");
      this.router.navigate(['/log']);

    }

  }


