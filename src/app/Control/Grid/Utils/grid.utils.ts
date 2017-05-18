export class GridUtil{
    static IsTrue(value:any):boolean{
        if(value !==  undefined && value.toString().toLowerCase() == "true"){
            return true;
        }
        return false;
    }
}