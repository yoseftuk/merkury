import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesComponent } from './sales.component';
import {UpperSectionHeaderComponent} from '../upper-section-header/upper-section-header.component';
import {EntriesPipe} from '../../pipes/entries.pipe';

describe('SalesComponent', () => {
  let component: SalesComponent;
  let fixture: ComponentFixture<SalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesComponent, UpperSectionHeaderComponent, EntriesPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesComponent);
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
  it('should x1 return right value', () => {
    expect(component.x1(0)).toEqual(component.cx + component.r1);
    expect(component.x1(Math.PI / 2)).toEqual(component.cx);
  });
  it('should x2 return right value', () => {
    expect(component.x2(0)).toEqual(component.cx + component.r2);
    expect(component.x2(Math.PI / 2)).toEqual(component.cx);
  });
  it('should y1 return right value', () => {
    expect(component.y1(0)).toEqual(component.cy);
    expect(component.y1(Math.PI / 2)).toEqual(component.cy + component.r1);
  });
  it('should y2 return right value', () => {
    expect(component.y2(0)).toEqual(component.cy);
    expect(component.y2(Math.PI / 2)).toEqual(component.cy + component.r2);
  });
});
