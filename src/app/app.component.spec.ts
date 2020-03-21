import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AsideComponent} from './layouts/aside/aside.component';
import {HeaderComponent} from './layouts/header/header.component';
import {MainComponent} from './layouts/main/main.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {MessagesComponent} from './components/messages/messages.component';
import {ActivityComponent} from './components/activity/activity.component';
import {TaskItemComponent} from './components/task-item/task-item.component';
import {MessageItemComponent} from './components/message-item/message-item.component';
import {ActivityItemComponent} from './components/activity-item/activity-item.component';
import {BottomSectionHeaderComponent} from './components/bottom-section-header/bottom-section-header.component';
import {ActivityTimePipe} from './pipes/activity-time.pipe';
import {TaskTimePipe} from './pipes/task-time.pipe';
import {SalesComponent} from './components/sales/sales.component';
import {ReportComponent} from './components/report/report.component';
import {UpperSectionHeaderComponent} from './components/upper-section-header/upper-section-header.component';
import {ForinPipe} from './pipes/forin.pipe';
import {EntriesPipe} from './pipes/entries.pipe';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AsideComponent,
        HeaderComponent,
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
        UpperSectionHeaderComponent,
        ActivityTimePipe,
        TaskTimePipe,
        ForinPipe,
        EntriesPipe
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should aside open state change when header open', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('#aside-wrapper').className).toContain('open');
    compiled.querySelector('.icon.hamburger').click();
    fixture.detectChanges();
    expect(compiled.querySelector('#aside-wrapper').className).not.toContain('open');
    compiled.querySelector('.icon.hamburger').click();
    fixture.detectChanges();
    expect(compiled.querySelector('#aside-wrapper').className).toContain('open');

  });
});
