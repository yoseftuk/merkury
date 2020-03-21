import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-upper-section-header',
  templateUrl: './upper-section-header.component.html',
  styleUrls: ['./upper-section-header.component.scss']
})
export class UpperSectionHeaderComponent implements OnInit {

  @Input('title') title: string;
  period: string = 'Last Year';
  constructor() { }

  ngOnInit(): void {
  }

}
