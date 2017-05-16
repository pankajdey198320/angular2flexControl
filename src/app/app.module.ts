import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {Grid } from './Control/Grid/grid.component';
import {GridColumn } from './Control/Grid/GridColumn/grid.column';
import{GridRow} from './Control/Grid/Row/grid.row';
import {GriColDirective} from './Control/Grid/GridColumn/g.col'
import {RenderDirective} from './Control/Grid/GridColumn/g.col.render';
import {testMycomp} from './testMyComp'
import {GridHelper} from './Control/Grid/Helper/grid.helper'
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,Grid ,GridColumn,GridRow,GriColDirective,RenderDirective,testMycomp],
  providers:[GridHelper],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
