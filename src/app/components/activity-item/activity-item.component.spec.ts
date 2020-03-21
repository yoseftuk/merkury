import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityItemComponent } from './activity-item.component';
import {ActivityTimePipe} from '../../pipes/activity-time.pipe';
import {tasks} from '../tasks/tasks.data';
import {ActivityTypes} from '../activity/activity.data';

describe('ActivityItemComponent', () => {
  let component: ActivityItemComponent;
  let fixture: ComponentFixture<ActivityItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityItemComponent, ActivityTimePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityItemComponent);
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
  it('should generate the right name', () => {
      const compiled = fixture.nativeElement;
      component.name = 'John Doe';
      fixture.detectChanges();
      expect(compiled.querySelector('.name.username').textContent).toContain('John Doe');
  });
  it('should generate the right task', () => {
    const compiled = fixture.nativeElement;
    component.task = ActivityTypes.NEW_PROJECT;
    fixture.detectChanges();
    expect(compiled.querySelector('.task').textContent).toContain('created a new project');
    component.task = ActivityTypes.NEW_TASK;
    fixture.detectChanges();
    expect(compiled.querySelector('.task').textContent).toContain('created a new task');
    component.task = ActivityTypes.COMPLETE_PROJECT;
    fixture.detectChanges();
    expect(compiled.querySelector('.task').textContent).toContain('completed project');
    component.task = ActivityTypes.COMPLETE_TASK;
    fixture.detectChanges();
    expect(compiled.querySelector('.task').textContent).toContain('completed task');
    component.task = ActivityTypes.COMMENT_PROJECT;
    fixture.detectChanges();
    expect(compiled.querySelector('.task').textContent).toContain('commented project');
    component.task = ActivityTypes.COMMENT_TASK;
    fixture.detectChanges();
    expect(compiled.querySelector('.task').textContent).toContain('commented task');
  });
  it('should generate the right subject', () => {
    const compiled = fixture.nativeElement;
    component.subject = 'PSD Template';
    fixture.detectChanges();
    expect(compiled.querySelector('.name.subject').textContent).toContain('PSD Template');
  });
  it('should generate the right time', () => {
    const compiled = fixture.nativeElement;
    const d = new Date(new Date().getTime() - 1e6);
    component.time = d;
    fixture.detectChanges();
    expect(compiled.querySelector('.time-text').textContent).toContain(new ActivityTimePipe().transform(d));
  });
});
