import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Sort } from '@angular/material/sort';
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
  displayedColumns = ['id', 'firstName', 'lastName', 'editUser'];

  sortedData;

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

    this.sortedData = this.users.slice();

   }

   sortData(sort: Sort) {
    const data = this.users.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'id': return this.compare(a.id, b.id, isAsc);
        case 'firstName': return this.compare(a.firstName, b.firstName, isAsc);
        case 'lastName': return this.compare(a.lastName, b.lastName, isAsc);
        default: return 0;
      }
    });

  }

 compare(a: string, b: string, isAsc: any) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  

  ngOnInit(): void {
  }

}
