import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input('name') name: string;
  @Input('time') time: Date;
  @Input('msg') msg: string;
  @Input('image') image: string;
  @Input('unread') unread: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
