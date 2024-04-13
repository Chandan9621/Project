import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiIntegrationsService } from '../api-integrations.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit(): void {
  }
  loginForm: FormGroup;
// otp:any;
  constructor(private service: ApiIntegrationsService, private router: Router, private fb: FormBuilder) {
    // Initialize the login form with validators
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  // Function to handle form submission
  // adminAppDetails(){
 
  //   this.service.appDetails().subscribe((data:any)=>{
  //   if(data!=null){
 
  //   }else{

  //   }
  //   })
  // }
  onSubmit() {
    // this.adminAppDetails();
    

    if (this.loginForm.valid) {
        const inputData = { "email": this.loginForm.value.username, "password": this.loginForm.value.password }
       console.log("inputData: "+JSON.stringify(inputData))
        this.service.loginValidate(inputData).subscribe((data: any) => {
          const adminData: any = data;
          console.log("adminData: "+JSON.stringify(adminData));
          if (adminData!= null) {
          if (adminData.status === 200) {
            // this.showOTPModal();
            Swal.fire({
              title: 'Valid Credentials',
              text: 'Sign in successful.',
            });
            console.log("data login: "+JSON.stringify(data.data))
            console.log("data login: "+JSON.stringify(data))
            sessionStorage.setItem('token', data.data.token);
            this.router.navigate(['/clients'])
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Invalid Credentials',
              text: 'Please check your username and password and try again.',
            });
          }}
        }, (error) => {
          // if (error.status === 404) {
            console.log("error: "+JSON.stringify(error));
            Swal.fire({
              icon: 'error',
              title: error.status,
              text: error.error.message,
            });
          // } else {
            // Handle other errors
          // }
        });
    } else {
      // Mark the form controls as touched to display validation errors
      this.loginForm.markAllAsTouched();
    }
  }

  // Helper function to check if a form control has an error
  hasError(controlName: string, errorName: string) {
    const control = this.loginForm.get(controlName);
    return control && control.hasError(errorName) && control.touched;
  }
  
  
  
  
//   async showOTPModal(){
    
//      Swal.fire({
      
//     title: 'Enter OTP',
//     html: '<input type="text" id="otp" class="swal2-input" placeholder="Enter OTP">',
//     showCancelButton: true,
//     confirmButtonText: 'Validate',
//     cancelButtonText: 'Cancel',
//     allowOutsideClick: () => !Swal.isLoading(),
//     preConfirm: () => {
//         const otpInput =  <HTMLInputElement>document.getElementById('otp');
//         const otpValue = otpInput.value;

//         // Check if the entered OTP is correct (predefined)
//         if (otpValue==='12345') {
//             return true; // Indicates success
//         } else {
//             Swal.showValidationMessage('Please enter a valid OTP');
//             return false; // Indicates failure
//         }
//     }
// }).then((result) => {
//     if (result.isConfirmed) {
//         // OTP validation succeeded, show the success message
//         Swal.fire('OTP Validated', 'Sign-In Successful!', 'success');
//     }
// });
// }
  
}
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // async showOTPModal() {
  //   // Assign the predefined OTP value here
  //   const predefinedOTP = "12345";
  
  //   // Use the predefined OTP value in the Swal.fire options
  //   const { value: otp } = await Swal.fire({
  //     title: 'Enter OTP',
  //     html:
  //       '<input type="text" id="otp" class="swal2-input" placeholder="Enter OTP">',
  //     // Rest of your Swal.fire options...
  //   });
  //   showClass: {
  //           popup: 'animate__animated animate__fadeInDown'
  //         }
  //         hideClass: {
  //           popup: 'animate__animated animate__fadeOutUp'
  //         }
  
  //   // Now, you can check if the entered OTP matches the predefined OTP
  //   if (otp) {
  //     Swal.fire('OTP Validated', 'You have successfully validated the OTP.', 'success');
  //   }
  


  // async showOTPModal() {
  //   const {value:otp} = await Swal.fire({
  //     title: 'Enter OTP',
  //     html:
  //       '<input type="text" id="otp" class="swal2-input" placeholder="Enter OTP">',
  //     showClass: {
  //       popup: 'animate__animated animate__fadeInDown'
  //     },
  //     hideClass: {
  //       popup: 'animate__animated animate__fadeOutUp'
  //     },
  //     showCancelButton: true,
  //     confirmButtonText: 'Validate',
  //     cancelButtonText: 'Cancel',
  //     allowOutsideClick: () => !Swal.isLoading(),
  //     preConfirm: async () => {
  //       const otpInput = <HTMLInputElement>document.getElementById('otp');
  //       const otpValue = otpInput.value;
  //       if (!otpValue) {
  //         Swal.showValidationMessage('OTP is required');
  //         return '';
  //       }
  //       // const isValid=await this.getValidatedOTP(otpValue);
  //       // if (isValid) {
  //       //   // this.loginValidation();
  //       //   return otpValue;
  //       // } else {
  //       //   Swal.showValidationMessage('Please enter valid OTP');
  //       //   return '';
  //       // }
  //     }
  //   });

  //   if (otp=="12345") {
  //     Swal.fire('OTP Validated', 'You have successfully validated the OTP.', 'success');
  //   }
  // }
