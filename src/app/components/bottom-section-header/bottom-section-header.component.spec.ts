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

  afterEach(() => {
    if (fixture.nativeElement && 'remove' in fixture.nativeElement) {
      (fixture.nativeElement as HTMLElement).remove();
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show primary notification only if 1+', () => {
    const compiled = fixture.nativeElement;
    component.prNotif = 0;
    fixture.detectChanges();
    expect(compiled.querySelector('.pr-badge')).toBeNull();
    component.prNotif = 3;
    fixture.detectChanges();
    expect(compiled.querySelector('.pr-badge')).toBeTruthy();
    expect(compiled.querySelector('.pr-badge').textContent).toEqual('3');
    component.prNotif = 5;
    fixture.detectChanges();
    expect(compiled.querySelector('.pr-badge')).toBeTruthy();
    expect(compiled.querySelector('.pr-badge').textContent).toEqual('5');
  });
  it('should show danger notification only if 1+', () => {
    const compiled = fixture.nativeElement;
    component.dangerNotif = 0;
    fixture.detectChanges();
    expect(compiled.querySelector('.danger-badge')).toBeNull();
    component.dangerNotif = 3;
    fixture.detectChanges();
    expect(compiled.querySelector('.danger-badge')).toBeTruthy();
    expect(compiled.querySelector('.danger-badge').textContent).toEqual('3');
    component.dangerNotif = 5;
    fixture.detectChanges();
    expect(compiled.querySelector('.danger-badge')).toBeTruthy();
    expect(compiled.querySelector('.danger-badge').textContent).toEqual('5');
  });
});
