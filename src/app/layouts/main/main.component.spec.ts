import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import {TasksComponent} from '../../components/tasks/tasks.component';
import {MessagesComponent} from '../../components/messages/messages.component';
import {ActivityComponent} from '../../components/activity/activity.component';
import {ActivityTimePipe} from '../../pipes/activity-time.pipe';
import {TaskTimePipe} from '../../pipes/task-time.pipe';
import {TaskItemComponent} from '../../components/task-item/task-item.component';
import {MessageItemComponent} from '../../components/message-item/message-item.component';
import {ActivityItemComponent} from '../../components/activity-item/activity-item.component';
import {BottomSectionHeaderComponent} from '../../components/bottom-section-header/bottom-section-header.component';
import {SalesComponent} from '../../components/sales/sales.component';
import {ReportComponent} from '../../components/report/report.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        TasksComponent,
        MessagesComponent,
        ActivityComponent,
        TaskItemComponent,
        MessageItemComponent,
        ActivityItemComponent,
        BottomSectionHeaderComponent,
        SalesComponent,
        ReportComponent,
        ActivityTimePipe,
        TaskTimePipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
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
});
