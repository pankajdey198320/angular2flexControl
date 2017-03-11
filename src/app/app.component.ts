import { Component } from '@angular/core';
import {DataService} from './Service/grid-data.service';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <flex-grid [Data]="DataSrc">
    <flex-grid-column *TemplateRef  Title = 'name'><div>asdas</div></flex-grid-column>
    <flex-grid-column *TemplateRef  Title = 'salary'>asdasd</flex-grid-column>
  
    <flex-grid-column *TemplateRef  Title = 'age'>asdasd</flex-grid-column>
    <template></template>
  </flex-grid>
  `,
})
export class AppComponent  { name = 'Angular';
DataSrc:any[]=[];
constructor(){
  let ds= new DataService();
 this.DataSrc= ds.getData();
}
 }
