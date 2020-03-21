import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
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
  it('should have open class on hamburger open', () => {
    const compiled = fixture.nativeElement;
    component.isOpen = true;
    fixture.detectChanges();
    expect(compiled.querySelector('.hamburger-cont').className).toContain('open');
    component.isOpen = false;
    fixture.detectChanges();
    expect(compiled.querySelector('.hamburger-cont').className).not.toContain('open');
  });
  it('should have change hamburger open state on hamburger click', () => {
    const compiled = fixture.nativeElement;
    const hamburger = compiled.querySelector('.hamburger-cont');
    fixture.detectChanges();
    component.isOpen = false;
    hamburger.click();
    fixture.detectChanges();
    expect(hamburger.className).toContain('open');
    hamburger.click();
    fixture.detectChanges();
    expect(hamburger.className).not.toContain('open');
  });
  it('should show notification only if 1+', () => {
    const compiled = fixture.nativeElement;
    component.notifications = 0;
    fixture.detectChanges();
    expect(compiled.querySelector('.badge')).toBeNull();
    component.notifications = 1;
    fixture.detectChanges();
    expect(compiled.querySelector('.badge')).toBeTruthy();
    expect(compiled.querySelector('.badge').textContent).toEqual('1');
    component.notifications = 4;
    fixture.detectChanges();
    expect(compiled.querySelector('.badge')).toBeTruthy();
    expect(compiled.querySelector('.badge').textContent).toEqual('4');
  });
});
