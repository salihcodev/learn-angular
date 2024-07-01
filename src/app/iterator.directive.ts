import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIterator]',
  standalone: true,
})
export class IteratorDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input(`appIterator`) set render(times: number) {
    this.viewContainer.clear();
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }
}
