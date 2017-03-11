import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {Grid } from './Control/Grid/grid.component';
import {GridColumn } from './Control/Grid/GridColumn/grid.column';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,Grid ,GridColumn],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
