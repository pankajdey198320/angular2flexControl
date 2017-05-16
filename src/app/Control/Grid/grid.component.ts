import { Component, ContentChildren, QueryList, AfterContentInit, Input, TemplateRef, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { GridContextModel, Sorting, SortDirection } from './Model/grid-context.model';
import { GridStyle } from './model/grid-style.model';
import { GridHelper } from './Helper/grid.helper'
import { GridColumn } from './GridColumn/grid.column';
import { GridColumnModel } from './Model/grid-column.model';
import { DataRowModel } from './Model/grid-data-row.model';
import { GriColDirective } from './GridColumn/g.col'
@Component({
  selector: 'flex-grid',
  templateUrl: '/app/control/Grid/grid.template.html',
  styleUrls: ['./app/Control/Grid/Style/basic.style.css']
})
export class Grid implements AfterContentInit {
  
  private context: GridContextModel;
  public styles: GridStyle = null;
  gridColumnModels: GridColumnModel[] = [];
  private _data: DataRowModel[] = [];
  @Input() set Data(data: DataRowModel[]) {
    data.forEach((element, inx) => {
      let x = new DataRowModel();
      x = element;
      x.index = inx;
      x.selected = false;

      this._data.push(x)
    });
    this.context.Data = this._data;
    // this._data = data;
  };
  get Data(): DataRowModel[] {
    return this._data;
  }

  @Input() set StyleClass(val: string) {
    if (val != undefined && val.length > 0) {
      this.styles.baseClassName = val;
    }
  }
  @Input() EnableSelectCheckbox:boolean;
  ///All events to host components
  @Output() selected: EventEmitter<DataRowModel> = new EventEmitter();
  @Output() sorted: EventEmitter<GridContextModel> = new EventEmitter();

  @ContentChildren(GriColDirective) cra: QueryList<any>;
  constructor(private hlper: GridHelper) {
    this.context = new GridContextModel();
    this.context.sorting = new Sorting();
    this.context.sorting.IsClientSide = true;
    this.context.sorting.SortColumn = 'name';
    this.context.sorting.SortDirection = SortDirection.Asc;
    this.context.paging.PageSize = 10;

    this.styles = new GridStyle();
    this.styles.baseClassName='flex-grid';
    this.EnableSelectCheckbox = false;
  }
  ngAfterContentInit() {
    // contentChildren is set
    this.cra.forEach((item, idx) => {
      let gm = new GridColumnModel(item.col_name, item.Value, item.templateRef,item.Type);
      
      this.gridColumnModels.push(gm);
    })
    let x = this.cra;
  }
  select(item: DataRowModel) {
    let selectedArr = this._data.filter(v => v.selected == true);
    selectedArr.forEach(v => v.selected = false);
    item.selected = true;
    this.selected.emit(item);
  }
  SelectAll(){
    this._data.forEach(v => v.selected = true);
  }
  SortClick(columnName: string) {
    if (this.context.sorting.IsClientSide !== true) {
      this.sorted.emit(this.context);
    }
    else {
      this.hlper.Sort(this.context, columnName);
    }
  }

}