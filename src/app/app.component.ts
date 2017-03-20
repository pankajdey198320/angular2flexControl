import { Component } from '@angular/core';
import {DataService} from './Service/grid-data.service';
@Component({
  selector: 'my-app',
  templateUrl:'./app/app.html'
})
export class AppComponent  { name = 'Angular';
DataSrc:any[]=[];
constructor(){
  let ds= new DataService();
 this.DataSrc= ds.getData();
}
 }
