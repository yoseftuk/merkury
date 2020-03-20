import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task';
import {tasks} from './tasks.data';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = tasks;
  constructor() { }

  ngOnInit(): void {
  }

}
