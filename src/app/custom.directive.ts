import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  standalone: true,
})
export class appCustomDirective {
  constructor(private el: ElementRef) {}

  @Input() set background(color: string) {
    this.el.nativeElement.style.background = color;
  }
}
