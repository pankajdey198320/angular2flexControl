import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import {GridColumnTypeModel} from '../Model/grid-column-type.model';
@Directive({
  selector: '[colP]'
})
export class GriColDirective {
  public ctx?: any;
  public col_name: string = '';
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() set colP(columnName: string) {
    this.col_name = columnName;

  }
  @Input() Type: GridColumnTypeModel;

}