import {Component, OnInit} from '@angular/core';
import {Sales} from '../../models/sales';
import {salesData} from './sales.data';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  data: Sales = salesData;
  arcs: { color: string, path: string }[] = [];
  labels = {
    Websites: '#4b74e0',
    Logo: '#4164c2',
    'Social Media': '#3755a4',
    Adwords: '#25396e',
    'E-Commerce': '#5584ff'
  };
  cx = 182;
  cy = 180.5;
  r1 = 145;
  r2 = 91;
  legendsX = 375;
  legendsY = 114;
  legendsSpace = 32;
  total = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.total = Object.values(this.data).reduce((a, b) => a + b, 0);
    this.animateArcs();
  }

  x1(theta) {
    return this.cx + Math.cos(theta) * this.r1;
  }

  x2(theta) {
    return this.cx + Math.cos(theta) * this.r2;
  }

  y1(theta) {
    return this.cy + Math.sin(theta) * this.r1;
  }

  y2(theta) {
    return this.cy + Math.sin(theta) * this.r2;
  }

  toArcs(data: Sales, maxTheta: number): void {
    let lastTheta = -Math.PI / 2;
    this.arcs = Object.entries(data).map(([key, value]) => {
      const theta = value * maxTheta / this.total + lastTheta;
      const res = `M ${this.x1(lastTheta)} ${this.y1(lastTheta)} A ${this.r1} ${this.r1} 0 0 1 ${this.x1(theta)} ${this.y1(theta)}` +
        `L ${this.x2(theta)} ${this.y2(theta)} A ${this.r2} ${this.r2} 0 0 0 ${this.x2(lastTheta)} ${this.y2(lastTheta)} Z`;
      lastTheta = theta;
      return {color: this.labels[key], path: res};
    }, '');
  }

  animateArcs(max = 0) {
    if (!this) {
      return;
    }
    if (max >= Math.PI * 2) {
      this.toArcs(this.data, Math.PI * 2);
      return;
    }
    this.toArcs(this.data, max);
    requestAnimationFrame(() => this.animateArcs(max + .2));
  }

}
