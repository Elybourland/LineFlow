import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : User[];
  displayedColumns = ['id', 'firstName', 'lastName'];
  constructor() { 
    this.users = [{
      id: '1',
      firstName: 'Fizen',
      lastName: 'Zirp',
      roles: [{
        id: '1',
        name: 'Role 1',
        description: ''
      }]
    } as User];

   }

  ngOnInit(): void {
  }

}
