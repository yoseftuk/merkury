import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  @Input('isOpen') isOpen: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
