import { Injectable } from '@angular/core';
import { User } from './user';
import { Authresult } from './authresult';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod, Headers, Jsonp } from '@angular/http';


import { Observable, observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'; 
import { Registration } from './registration';
 
  

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(private http : HttpClient) {

  }
 
  doLogin(user : User) : Observable<User> {
    const headers = new HttpHeaders().set("Content-Type", "application/json") 
    return this.http.post<User>('http://127.0.0.1:8080/access/doLogin', user, { headers });
  }

  getUsers() : Observable<User> {
    const headers = new HttpHeaders().set("Content-Type", "application/json")
    return this.http.get<User>('http://127.0.0.1:8080/access/getUsers', { headers });
  }

  registrateUser(user : Registration) : void {
    const headers = new HttpHeaders().set("Content-Type", "application/json")
    let result = this.http.post('http://127.0.0.1:8080/access/doRegistration', user, { headers });
    console.log(result);

    console.log(user.gender)
    console.log(user.birthdate)

  }
  
}
