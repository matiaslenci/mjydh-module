import {Directive, ElementRef, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[myAutofocus]'
})
export class AutoFocusInputDirective implements AfterViewInit {
  constructor(private el: ElementRef)
  {
  }
  ngAfterViewInit()
  {
    this.el.nativeElement.focus();
  }
}