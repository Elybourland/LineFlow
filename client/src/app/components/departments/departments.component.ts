import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments: Department[];
  constructor() { 
    this.departments = [
      { 
        id: 1,
        name: 'Test Department',
        description: 'Test Department',
        users: [ { 
          id: 1,
          firstName: 'Ryan',
          lastName: 'Gross',
          roles: [ { 
            id: 1, 
            name: 'Test Role',
            description: 'Test Role'
          }]
        }]
      }
  ]

  }

  
  ngOnInit(): void {


  }

}
