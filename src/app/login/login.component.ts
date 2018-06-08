import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AccessService ]
})
export class LoginComponent implements OnInit {
 
  currentUser : User

  @Output()
  userEmitter = new EventEmitter<User>()

  constructor(private router : Router, private accessService : AccessService) {
    
  }

  ngOnInit() {

  }

  register(){
    this.router.navigate(['register'])
  }

  doLogin(user : User) {
    this.userEmitter.emit(this.currentUser)
    
    
    let myUser : Observable<User> = this.accessService.doLogin(this.currentUser);

    console.log("RESULT -> " + myUser)
    
    //this.router.navigate(['home'])
  }
 

}