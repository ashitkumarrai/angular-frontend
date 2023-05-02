import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CandidateModel } from 'src/app/model/UserModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  loginForm: any;


  matSpinnerShow: boolean = false;

  loginData!: any;

  //public signupSubjet = new BehaviorSubject<boolean>(false);
  constructor(private formBuilder: FormBuilder, private authService: AuthService, public dialog: MatDialog,private router :Router) {


    console.log("validation")
    this.loginForm = this.formBuilder.group({

      username: ['', [Validators.required]],
      password: ['', [Validators.required]],

    });



    this.loginData = {


      username: "",
      password: "",
    }

  }



  ngOnInit(): void {

  }




  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }









  onSubmit() {

    this.loginData.username = this.loginForm.value['username'];

    this.loginData.password = this.loginForm.value['password'];

    this.matSpinnerShow = true;

  
    this.authService.loginUser(this.loginData)
    
      console.log(this.authService.getAuthData());


      Swal.fire('Thank you...', 'Login Done !', 'success').then((result) => {
        if (result.value) {
          this.dialog.closeAll();
          if (this.authService.getAuthData().authority == "ADMIN") {
            this.router.navigate(['admin']);
            
          }

          else if (this.authService.getAuthData().authority == "EMPLOYER") {
            this.router.navigate(['/employer']);
            
          }

          else if (this.authService.getAuthData().authority == "ADMIN") {
            this.router.navigate(['/']);
            
          }
      
  
          
        }
      });
  
  
  
        this.matSpinnerShow = false;
  
    
             
   
    


      // this.signupSubjet.next(true);
    


    
  }
}
