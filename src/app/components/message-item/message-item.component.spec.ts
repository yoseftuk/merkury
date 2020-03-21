import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageItemComponent } from './message-item.component';
import {ActivityTimePipe} from '../../pipes/activity-time.pipe';

describe('MessageItemComponent', () => {
  let component: MessageItemComponent;
  let fixture: ComponentFixture<MessageItemComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageItemComponent, ActivityTimePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageItemComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
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
    component.name = 'Song Chacha';
    fixture.detectChanges();
    expect(compiled.querySelector('.name').textContent).toContain('Song Chacha');
  });
  it('should generate the right message', () => {
    const msg = 'Good morning, you are fired!';
    component.msg = msg;
    fixture.detectChanges();
    expect(compiled.querySelector('.msg').textContent).toContain(msg);
  });
  it('should generate the right time', () => {
    const date = new Date(new Date().getTime() -  1e6);
    component.time = date;
    fixture.detectChanges();
    expect(compiled.querySelector('.time').textContent).toContain(new ActivityTimePipe().transform(date));
  });
});
