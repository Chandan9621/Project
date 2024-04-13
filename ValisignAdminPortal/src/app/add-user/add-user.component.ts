import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  registrationFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationFormGroup = this.formBuilder.group({
      name: [''],
      apps: this.formBuilder.array([''])
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get apps() {
    return this.registrationFormGroup.get('apps') as FormArray;
  }

  addApp() {
    this.apps.push(this.formBuilder.control(''));
  }

  removeApp(index: number) {
    this.apps.removeAt(index);
  }

  clientRegistration() {
    // Handle form submission here
    const formData = this.registrationFormGroup.value;
    console.log(formData);
    // Add logic to send data to the server or perform other actions
  }

  }


