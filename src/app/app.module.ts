import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {Grid } from './Control/Grid/grid.component';
import {GridColumn } from './Control/Grid/GridColumn/grid.column';
import{GridRow} from './Control/Grid/Row/grid.row';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,Grid ,GridColumn,GridRow],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
