import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AccessService } from '../access.service';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private users: User[];

  constructor(private accessService : AccessService) {

  }

  ngOnInit() { 
    /*
    this.accessService.getUsers()
      .subscribe(
        (users: User[]) => {
          this.users = users;
        },
        (error) => console.log(error)
      ) 
     */
  }

}
