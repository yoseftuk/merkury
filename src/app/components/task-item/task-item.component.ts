import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() title: string;
  @Input() time: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }
  isPast(time) {
    return time.getTime() <= new Date().getTime();
  }
}
