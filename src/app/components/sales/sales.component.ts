import { Component, OnInit } from '@angular/core';
import {Sales} from '../../models/sales';
import {salesData} from './sales.data';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  data: Sales = salesData;
  arcs: {color: string, path: string}[] = [];
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
  total: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.total = Object.values(this.data).reduce((a, b) => a + b, 0);
    this.animateArcs();
  }
  toArcs(data: Sales, maxTheta: number): void {
    let lastTheta = -Math.PI / 2;
    const x1 = theta => this.cx + Math.cos(theta) * this.r1;
    const x2 = theta => this.cx + Math.cos(theta) * this.r2;
    const y1 = theta => this.cy + Math.sin(theta) * this.r1;
    const y2 = theta => this.cy + Math.sin(theta) * this.r2;
    this.arcs = Object.entries(data).map(([key, value]) => {
      const theta = value * maxTheta / this.total + lastTheta;
      const res = `M ${x1(lastTheta)} ${y1(lastTheta)} A ${this.r1} ${this.r1} 0 0 1 ${x1(theta)} ${y1(theta)}` +
      `L ${x2(theta)} ${y2(theta)} A ${this.r2} ${this.r2} 0 0 0 ${x2(lastTheta)} ${y2(lastTheta)} Z`;
      lastTheta = theta;
      console.log(key, this.labels[key]);
      return {color: this.labels[key], path: res};
    }, '');
  }
  animateArcs(max = 0) {
    if (!this) {return; }
    if (max >= Math.PI * 2) {
      this.toArcs(this.data, Math.PI * 2);
      return;
    }
    this.toArcs(this.data, max);
    requestAnimationFrame(() => this.animateArcs(max + .2));
  }

}
