import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';
import {TaskItemComponent} from '../task-item/task-item.component';
import {BottomSectionHeaderComponent} from '../bottom-section-header/bottom-section-header.component';
import {TaskTimePipe} from '../../pipes/task-time.pipe';
import {tasks} from './tasks.data';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TasksComponent,
        TaskItemComponent,
        BottomSectionHeaderComponent,
        TaskTimePipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
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
    component.tasks = tasks.slice(0, 3);
    fixture.detectChanges();
    expect(compiled.querySelectorAll('.item').length).toBe(3);
    component.tasks = [...tasks, ...tasks];
    fixture.detectChanges();
    expect(compiled.querySelectorAll('.item').length).toBe(4);
  });
});
