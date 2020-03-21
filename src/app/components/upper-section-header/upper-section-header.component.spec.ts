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
  afterEach(() => {
    if (fixture.nativeElement && 'remove' in fixture.nativeElement) {
      (fixture.nativeElement as HTMLElement).remove();
    }
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render the right title', () => {
    const compiled = fixture.nativeElement;
    component.title = 'hello world!';
    fixture.detectChanges();
    expect(compiled.querySelector('.title').textContent).toContain('Hello World!');
  });
});
