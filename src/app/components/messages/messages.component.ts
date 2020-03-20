import { Component, OnInit } from '@angular/core';
import {Message} from '../../models/message';
import {messages} from './messages.data';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: Message[] = messages;
  constructor() { }

  ngOnInit(): void {
  }

}
