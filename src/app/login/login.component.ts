import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { Observable, observable } from 'rxjs';
import { Authresult } from '../authresult'; 
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AccessService ]
})
export class LoginComponent implements OnInit {
 
  loginFormGroup : FormGroup;
  
  loginStatus : string; 

  email = new FormControl('', Validators.email);
  password = new FormControl('', Validators.required);
 
  constructor(
    private router : Router, 
    private accessService : AccessService, 
    public formBuilder : FormBuilder) {
    
  }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  register(){
    this.router.navigate(['register'])
  }

  doLogin(user) {
    user = this.loginFormGroup.value as User; 

    this.accessService.doLogin(user.email, user.password)
    .subscribe(data => {
      this.loginStatus = data.status
      if(this.loginStatus === "LOGIN_OK") {
        this.accessService.currentUser = data.user
        this.router.navigate(['home'])
      }
    });

 
  }

}