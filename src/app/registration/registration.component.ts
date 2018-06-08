import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { Registration } from '../registration';
import { AccessService } from '../access.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationFormGroup : FormGroup;
  userToRegistrate : Registration;

  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  surname = new FormControl('', Validators.required);
  cf = new FormControl('', Validators.required);
  gender = new FormControl('', Validators.required);
  birthdate = new FormControl('', Validators.required);
  
  constructor(private accessService : AccessService, private router : Router, public formBuilder : FormBuilder) { 
     
  }

  ngOnInit() {

    this.registrationFormGroup = this.formBuilder.group({
      email: this.email,
      password: this.password,
      name: this.name,
      surname: this.surname,
      cf: this.cf,
      birthdate: this.birthdate,
      gender: this.gender
    });

  }

  registrate(user) : void {
    user = this.registrationFormGroup.value as Registration;
    this.accessService.registrateUser(user);
  }

}
