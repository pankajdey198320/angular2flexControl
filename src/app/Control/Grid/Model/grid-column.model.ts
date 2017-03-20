import {TemplateRef} from '@angular/core';
export class GridColumnModel{
    constructor(
    public Title:string,
    public Value:string='DefaultValue',
    public ref:TemplateRef<any>){}
    

}