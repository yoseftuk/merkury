import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperSectionHeaderComponent } from './upper-section-header.component';

describe('UpperSectionHeaderComponent', () => {
  let component: UpperSectionHeaderComponent;
  let fixture: ComponentFixture<UpperSectionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperSectionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
