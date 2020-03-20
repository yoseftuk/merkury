import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss']
})
export class ActivityItemComponent implements OnInit {

  @Input('name') name: string;
  @Input('task') task: string;
  @Input('subject') subject: string;
  @Input('time') time: string;
  @Input('image') image: string;
  constructor() { }

  ngOnInit(): void {
  }

}
