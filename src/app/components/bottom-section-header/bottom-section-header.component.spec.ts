import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSectionHeaderComponent } from './bottom-section-header.component';

describe('BottomSectionHeaderComponent', () => {
  let component: BottomSectionHeaderComponent;
  let fixture: ComponentFixture<BottomSectionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSectionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
