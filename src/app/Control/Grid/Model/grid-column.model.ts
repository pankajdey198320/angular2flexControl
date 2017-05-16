import {TemplateRef} from '@angular/core';
import {GridColumnTypeModel} from '../Model/grid-column-type.model'
export class GridColumnModel{
    constructor(
    public Title:string,
    public Value:string='DefaultValue',
    public ref:TemplateRef<any>,
    public Type:GridColumnTypeModel
    ){}

}