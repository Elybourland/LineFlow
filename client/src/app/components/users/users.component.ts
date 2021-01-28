import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  users : User[];
  displayedColumns = ['id', 'firstName', 'lastName', 'editUser', 'deleteUser'];
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
    },
    {
      id: '2',
      firstName: 'Keylog',
      lastName: 'This',
      roles: [{
        id: '2',
        name: 'Role 2',
        description: ''
      }]
    },
    {
      id: '3',
      firstName: 'Hey',
      lastName: 'There',
      roles: [{
        id: '3',
        name: 'Role 3',
        description: ''
      }]
    },
    {
      id: '4',
      firstName: 'Drake',
      lastName: 'the Dog',
      roles: [{
        id: '4',
        name: 'Role 4',
        description: ''
      }]
    } as User];

   }

  ngOnInit(): void {
  }

}
