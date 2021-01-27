import { Component, Input, OnInit } from '@angular/core';
import { Summary } from '../../../models/summary.model'

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css']
})
export class SummaryCardComponent implements OnInit {
  @Input() summary: Summary;

  constructor() { 
    this.summary = {} as Summary;
  }

  ngOnInit(): void {
  }

}
