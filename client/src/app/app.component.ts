import { Component } from '@angular/core';
import { User } from './models/user.model';
import { Role } from './models/role.model';
// import { Notification } from '.models/notification.model';
// import { Equipment } from '.models/equipment.model';
// import { Job } from '.models/job.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'line-flow';
  /**
   *
   */
  constructor() {
    const users: User[] = [{
      id: '1',
      firstName: 'Ryan',
      lastName: 'Gross',
      roles: [{
        id: '1',
        name: 'Role 1',
        description: 'Test role 1',
      }] as Role[]
    }]

    users.forEach(user => console.log(user))
  }
}
