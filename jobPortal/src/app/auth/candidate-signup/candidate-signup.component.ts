import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { CandidateModel } from 'src/app/model/UserModel';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-candidate-signup',
  templateUrl: './candidate-signup.component.html',
  styleUrls: ['./candidate-signup.component.css']
})
export class CandidateSignupComponent implements OnInit {
  hide: boolean = true;
  candidateSignUpForm: any;


  matSpinnerShow: boolean = false;

  candidateData!: CandidateModel;

  //public signupSubjet = new BehaviorSubject<boolean>(false);
  constructor(private formBuilder: FormBuilder, private authService: AuthService, public dialog: MatDialog) {


    console.log("validation")
    this.candidateSignUpForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],

    });



    this.candidateData = {
      user: {

        username: "",
        password: "",
        firstName: "",
        lastName: "",

        email: "",
        contact: "",
        imageUrl: null,
        adress: ""


      }

    }

  }



  ngOnInit(): void {

  }



  get firstname() {
    return this.candidateSignUpForm.get('firstname');
  }

  get lastname() {
    return this.candidateSignUpForm.get('lastname');
  }

  get email() {
    return this.candidateSignUpForm.get('email');
  }
  get username() {
    return this.candidateSignUpForm.get('username');
  }

  get password() {
    return this.candidateSignUpForm.get('password');
  }

  get confirmpassword() {
    return this.candidateSignUpForm.get('confirmpassword');
  }







  onSubmit() {

    this.candidateData.user.firstName = this.candidateSignUpForm.value['firstname'];
    this.candidateData.user.lastName = this.candidateSignUpForm.value['lastname'];
    this.candidateData.user.username = this.candidateSignUpForm.value['username'];
    this.candidateData.user.email = this.candidateSignUpForm.value['email'];
    this.candidateData.user.password = this.candidateSignUpForm.value['password'];


    console.log(this.candidateData);
    this.matSpinnerShow = true;
    this.authService.candidateSignup(this.candidateData).subscribe(data => {
      console.log(data);


      this.matSpinnerShow = false;



      // this.signupSubjet.next(true);


      Swal.fire('Thank you...', 'Sign up Done  succesfully! a verification link is sent to your given mail', 'success').then((result) => {
        if (result.value) {
          this.dialog.closeAll();
        }
      });




    },
      error => {
        console.log(error);
        //this.signupSubjet.next(false);
      })


  };
}
