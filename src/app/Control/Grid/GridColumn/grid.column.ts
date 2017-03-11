import { Component,Directive,Input } from '@angular/core';
@Directive({
    selector:'flex-grid-column'
})
export class GridColumn{
    @Input() Title:string;
    Value:string='DefaultValue';
}