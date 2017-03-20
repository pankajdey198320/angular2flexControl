import { Component,ContentChildren,QueryList,AfterContentInit,Input ,TemplateRef,ViewContainerRef} from '@angular/core';
import {GridColumn} from './GridColumn/grid.column';
import {GridColumnModel} from './Model/grid-column.model';
import {DataRowModel} from './Model/grid-data-row.model';
@Component({
    selector:'flex-grid',
    templateUrl:'/app/control/Grid/grid.template.html'
})
export class Grid implements AfterContentInit{
  gridColumnModels:GridColumnModel[]=[];
  @Input() Data:DataRowModel[]=[];
  @ContentChildren(TemplateRef) contentChildren: QueryList<any>;
  constructor(private cr:ViewContainerRef){
      // this.Data.push({index:0,fileds:
      //   [{fieldName:'Name',filedValue:'Pankaj Dey' },
      //   {fieldName:'salary',filedValue:'3300' },
      //   {fieldName:'Age',filedValue:'33' }]});
      // this.Data.push({index:0,
      //   fileds:[{fieldName:'Name',filedValue:'Rahul' },
      //   {fieldName:'salary',filedValue:'343' },
      //   {fieldName:'Age',filedValue:'22' }]});
     // this.Data.push({index:0,fileds:[{fieldName:'Name',filedValue:'Prateek' },{fieldName:'salary',filedValue:'2342' },{fieldName:'Age',filedValue:'45' }]});
  }
  ngAfterContentInit() {
    // contentChildren is set
     this.contentChildren.forEach((item,idx)=>{
        this.gridColumnModels.push(new GridColumnModel(item.Title,item.Value,item));
       //this.cr.createEmbeddedView(item,null,null);
     })
      
  }
}
  
