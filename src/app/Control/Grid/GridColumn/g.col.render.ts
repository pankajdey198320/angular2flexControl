import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[render]'
})
export class RenderDirective {
    public ctx?:any;
   
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
  
  @Input()  set render(ref: TemplateRef<any>) {
    this.viewContainerRef.createEmbeddedView(ref);
  }
 
}