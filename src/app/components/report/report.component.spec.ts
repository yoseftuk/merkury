import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponent } from './report.component';
import {UpperSectionHeaderComponent} from '../upper-section-header/upper-section-header.component';
import {ForinPipe} from '../../pipes/forin.pipe';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportComponent, UpperSectionHeaderComponent, ForinPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
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
  it('should getX return the right value', () => {
    expect(component.getX(0)).toBe(0);
    expect(component.getX(5)).toBe(443.5);
    expect(component.getX(10)).toBe(887);
  });
  it('should getY return the right value', () => {
    expect(component.getY(0)).toBe(component.startY + component.verticalHeight);
    expect(component.getY(350)).toBe(34 + (component.startY + component.verticalHeight - 34) / 2 );
    expect(component.getY(700)).toBe(34);
  });
});
