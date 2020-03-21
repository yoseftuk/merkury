import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appStickyTop]'
})
export class StickyTopDirective {
  constructor() { }
  @HostBinding('style.top') top = window.scrollY + 'px';

  @HostListener('window:scroll') onscroll() {
    this.top = window.scrollY + 'px';
  }

}
