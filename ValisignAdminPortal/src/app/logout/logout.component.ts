import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent{
  routers: any;
  // constructor(private router: Router) { this.routers = router }


  constructor(private router:Router) { }
  ngOnInit(): void {
    sessionStorage.clear();
    // this.router.navigate(['']);
    this.router.navigate(['/login']);
    Swal.fire({

      title: 'Logout ',

      text: 'Logout  successful.',

    });
    
  }

  logOut()
  {
    this.ngOnInit()
  }

}
