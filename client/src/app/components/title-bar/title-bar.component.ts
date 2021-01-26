import { Component, OnInit } from '@angular/core';
import { faBars, faUserCog, faBell } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {
  faBars = faBars;
  faUserCog = faUserCog;
  faBell = faBell;
  constructor() { }

  ngOnInit(): void {
  }

}
