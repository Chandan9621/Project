import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  router: any;
  constructor(private routers: Router) {
    this.router = routers;
  }
  ngOnInit(): void {
  }
  tokenValidate(): boolean {
    if (sessionStorage.getItem('token')) {
      return true;
    }
    return false;
  }
  isLoginClicked: boolean = false;

  changeFontColor() {
    this.isLoginClicked = !this.isLoginClicked;
  }
}
