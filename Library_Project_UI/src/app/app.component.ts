import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FormGroup } from '@angular/forms';
import{FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { __values } from 'tslib';
// import { Router } from '@angular/router';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
// import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ParentFunction:any;
  parentFunction(value:any)
  {
    this.ParentFunction=value;
  }

  }


