import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';
import {MessageItemComponent} from '../message-item/message-item.component';
import {BottomSectionHeaderComponent} from '../bottom-section-header/bottom-section-header.component';
import {ActivityTimePipe} from '../../pipes/activity-time.pipe';
import {messages} from './messages.data';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessagesComponent,
        MessageItemComponent,
        BottomSectionHeaderComponent,
        ActivityTimePipe,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (fixture.nativeElement && 'remove' in fixture.nativeElement) {
      (fixture.nativeElement as HTMLElement).remove();
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('render max of 4 items', () => {
    const compiled = fixture.nativeElement;
    component.messages = messages.slice(0, 3);
    fixture.detectChanges();
    expect(compiled.querySelectorAll('.item').length).toBe(3);
    component.messages = [...messages, ...messages];
    fixture.detectChanges();
    expect(compiled.querySelectorAll('.item').length).toBe(4);
  });
});
