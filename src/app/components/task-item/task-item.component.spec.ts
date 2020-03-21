import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemComponent } from './task-item.component';
import {TaskTimePipe} from '../../pipes/task-time.pipe';

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskItemComponent, TaskTimePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemComponent);
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
  it('should generate the right badge', () => {
    compiled = fixture.nativeElement;
    const badge = () => compiled.querySelector('.badge');
    component.title = 'Hello world!';
    fixture.detectChanges();
    expect(badge().textContent).toEqual('H');
    component.title = 'hello world!';
    fixture.detectChanges();
    expect(badge().textContent).toEqual('H');
    component.title = '';
    fixture.detectChanges();
    expect(badge().textContent).toEqual('');
    component.title = 'another text';
    fixture.detectChanges();
    expect(badge().textContent).toEqual('A');
  });
  it('should generate the right title', () => {
    component.title = 'Hello world!';
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('Hello world!');
  });
  it('should generate the right time', () => {
    const date = new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 3);
    component.time = date;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(compiled.querySelector('.time').textContent).toContain(new TaskTimePipe().transform(date));
  });
});
