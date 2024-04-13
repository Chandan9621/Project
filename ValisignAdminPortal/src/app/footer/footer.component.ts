import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // copyright = "Copyright@Ideabytes Software PVT LTD";
  copyright = "© IDEABYTES INC 2023 - INNOVATION IS BUSINESS";
}
