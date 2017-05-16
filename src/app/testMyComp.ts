import { Component } from '@angular/core';
import {DataService} from './Service/grid-data.service';
@Component({
  selector: 'my-col-view',
  template:`<h3 (click)='myClick()'><ng-content></ng-content></h3>`
})
export class testMycomp  { 
constructor(){
  
}
myClick(){
    alert('just f***');
}
}