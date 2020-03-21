import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityComponent } from './activity.component';
import {ActivityItemComponent} from '../activity-item/activity-item.component';
import {BottomSectionHeaderComponent} from '../bottom-section-header/bottom-section-header.component';
import {ActivityTimePipe} from '../../pipes/activity-time.pipe';
import {activities} from './activity.data';

describe('ActivityComponent', () => {
  let component: ActivityComponent;
  let fixture: ComponentFixture<ActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActivityComponent,
        ActivityItemComponent,
        BottomSectionHeaderComponent,
        ActivityTimePipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityComponent);
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
    component.activities = activities.slice(0, 3);
    fixture.detectChanges();
    expect(compiled.querySelectorAll('.item').length).toBe(3);
    component.activities = [...activities, ...activities];
    fixture.detectChanges();
    expect(compiled.querySelectorAll('.item').length).toBe(4);
  });
});
