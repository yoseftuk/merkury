import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss']
})
export class ActivityItemComponent implements OnInit {

  @Input('name') name: string;
  @Input('task') task: number;
  @Input('subject') subject: string;
  @Input('time') time: Date = new Date();
  @Input('image') image: string;
  tasks = [
    'created a new project',
    'created a new task',
    'completed project',
    'completed task',
    'commented project',
    'commented task'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
