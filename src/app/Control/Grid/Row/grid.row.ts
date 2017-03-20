import { Component ,Input,OnChanges} from '@angular/core';
import {DataRowModel} from '../Model/grid-data-row.model';
import {GridColumnModel} from '../Model/grid-column.model';
@Component({
    selector:'flex-grid-row',
    template: `
  <tr>
  <template ngFor let-col [ngForOf]="colms">
    <flex-grid-column [data]="DataRow" [ref]="col.ref"><div>asdas</div></flex-grid-column>
  </template>
  </tr>
  `
})
export class GridRow implements OnChanges{
    @Input() DataRow:DataRowModel;
    @Input() colms: GridColumnModel[]=[];
    constructor(){}
    ngOnChanges(d:any){
      console.log(d);
    }
}