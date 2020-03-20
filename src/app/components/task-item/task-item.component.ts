import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input('title') title: string;
  @Input('time') time: Date;
  constructor() { }

  ngOnInit(): void {
  }
  isPast() {
    return this.time.getTime() < new Date().getTime();
  }
}
