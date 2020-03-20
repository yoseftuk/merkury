import { Component, OnInit } from '@angular/core';
import {Activity} from '../../models/activity';
import {activities} from './activity.data';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activities: Activity[] = activities;
  constructor() { }

  ngOnInit(): void {
  }

}
