import { Component, OnInit } from '@angular/core';
import {reportData} from './report.data';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  verticalSpace = 48;
  horizontalSpace = 130;
  verticalHeight = 320;
  horizontalHeight = 780;
  startX = 70;
  startY = 50;
  pathInterval = 887 / 10;
  data = reportData;
  constructor() { }

  ngOnInit(): void {
  }
  getY(x: number) {
    return this.startY + this.verticalHeight - (x / 100) * this.verticalSpace;
  }
  getX(i: number) {
    return i * this.pathInterval;
  }
  getPath(data) {
    let lastY = this.getY(data[0]);
    return data.slice(1).reduce((a, t, i) => {
      const x = this.getX(i + 1);
      const y = this.getY(t);
      const res = `C ${x - this.pathInterval / 2} ${lastY}, ${x - this.pathInterval / 2} ${y}, ${x} ${y} `;
      lastY = y;
      return a + res;
    }, `M 0 ${this.getY(data[0])} `);
  }

}
