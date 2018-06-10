import { Injectable } from '@angular/core';
import { User } from './user';
import { Authresult } from './authresult';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {RequestOptions, Request, Response , RequestMethod, Headers, Jsonp } from '@angular/http';


import { Observable, observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'; 
import { Registration } from './registration';
import 'rxjs/add/operator/toPromise';
import { UserComponent } from './user/user.component';
  

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  currentUser : User;

  constructor(private http : HttpClient) {

  }
 
  doLogin(email, password) : Observable<Authresult> {
    const headers = new HttpHeaders().set("Content-Type", "application/json") 
    return this.http.post<Authresult>('http://127.0.0.1:8080/access/doLogin?email=' + email + '&password=' + password, { headers });
  }

  getUsers() : Observable<User> {
    const headers = new HttpHeaders().set("Content-Type", "application/json")
    return this.http.get<User>('http://127.0.0.1:8080/access/getUsers', { headers });
  }

  registrateUser(user : Registration) : void {
    const headers = new HttpHeaders().set("Content-Type", "application/json")
    let result = this.http.post('http://127.0.0.1:8080/access/doRegistration', user, { headers }); 

  }
  
}
