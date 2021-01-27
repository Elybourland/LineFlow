import { Component, OnInit } from '@angular/core';
import { Summary } from 'src/app/models/summary.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

 summaries: Summary[];

  constructor() {
    this.summaries = [
      { id: 1, icon: 'faUser', name: 'Users',},
      { id: 1, icon: 'faUser', name: 'Roles',},
      { id: 1, icon: 'faUser', name: 'Jobs',},
    ]

   }

  ngOnInit(): void {
  }

}
