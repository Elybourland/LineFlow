import { Component, OnInit } from '@angular/core';
import { faBars, faCogs, faTasks, faUsers, faUserTag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  faBars = faBars;
  faUsers = faUsers;
  faUserTag = faUserTag;
  faTasks = faTasks;
  faCogs = faCogs;
  constructor() { }

  ngOnInit(): void {
  }

}
