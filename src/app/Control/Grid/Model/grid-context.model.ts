class Paging{
    Enabled:boolean=true;
    Skip:number;
    PageNo:number;
    PageSize:number;
}
export enum SortDirection{
    Asc,Desc
}
export class Sorting{
    SortColumn:string;
    SortDirection:SortDirection;
    IsClientSide:boolean=false;
}
export class GridContextModel{
    constructor(){
        this.paging = new Paging();
        this.sorting = new Sorting();
    }
    paging:Paging;
    sorting:Sorting;
    Data:any[]; 
}